'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  text: string
  type: 'user' | 'bot'
}

const knowledge: Record<string, { keywords: string[]; response: string }> = {
  servicos: {
    keywords: ['serviço', 'serviços', 'fazem', 'oferecem', 'atividade', 'trabalho'],
    response: `A Vicometal oferece um leque completo de serviços industriais:\n\n• **Fabrico** — Estruturas metálicas, caldeiraria pesada, equipamentos industriais (até 3.000 ton/mês)\n• **Montagem** — Montagem de estruturas, centrais de britagem, asfalto e betão\n• **Manutenção Industrial** — Equipas especializadas em celuloses, cimenteiras, siderurgias e minas\n• **Soldadura** — MIG/MAG robotizada, TIG, arco submerso (certificação EN ISO 3834)\n• **Soluções Chave-na-Mão** — Do design à entrega com comissionamento\n• **Inox (Vicoinox)** — Aço inoxidável para química, farmacêutica e alimentar\n\nGostaria de saber mais sobre algum serviço específico?`,
  },
  orcamento: {
    keywords: ['orçamento', 'preço', 'custo', 'proposta', 'quanto custa', 'cotação', 'budget'],
    response: `Para solicitar um orçamento técnico, pode:\n\n1. **Formulário online** — Aceda à página de Orçamento onde pode fazer upload de desenhos (PDF, DWG, STEP)\n2. **Email** — Envie para vicometal@vicometal.pt\n3. **Telefone** — Ligue para (+351) 239 644 616\n\nPara agilizar o processo, é útil indicar:\n• Tipo de serviço pretendido\n• Especificações técnicas ou desenhos\n• Prazo estimado\n• Quantidade/tonelagem\n\nNormalmente respondemos em 48h úteis.`,
  },
  localizacao: {
    keywords: ['localização', 'onde', 'morada', 'endereço', 'chegar', 'mapa', 'sede'],
    response: `A sede da Vicometal está localizada em:\n\n📍 **Barroco, 3130-400**\nVila Nova de Anços · Soure\nPortugal\n\n**Coordenadas GPS:**\nN 40° 07' 19.68" W 8° 35' 52.50"\n\n**Horário de funcionamento:**\nSeg-Sex: 08:00 – 17:30\n\n**Como chegar:**\nA 10 min da A1 (saída Soure) e a 30 min de Coimbra.`,
  },
  certificacoes: {
    keywords: ['certificação', 'certificações', 'certificado', 'certificados', 'qualidade', 'norma', 'normas', 'iso', 'en1090', 'exc', 'certific'],
    response: `A Vicometal possui as seguintes certificações:\n\n✅ **EN 1090** — Marcação CE de estruturas metálicas\n✅ **NP EN 9001** — Sistema de Gestão da Qualidade\n✅ **EN ISO 3834** — Requisitos de qualidade para soldadura\n✅ Soldadores certificados pela EN 287-1 / EN ISO 9606-1\n✅ Procedimentos de Soldadura ASME IX / EN ISO 15614-1 / PED\n✅ Classe de execução EXC3\n\nPode consultar mais detalhes na página de Qualidade.`,
  },
  empresa: {
    keywords: ['empresa', 'quem são', 'história', 'fundação', 'grupo', 'vicometal'],
    response: `O **Grupo Vicometal** foi fundado em 15 de Outubro de 2001 com apenas 7 funcionários.\n\n**Hoje, o grupo integra:**\n• Vieira Cordeiro, S.A. (fabrico e montagem)\n• Pormenorvirtual, S.A. (engenharia e projeto)\n• Vicometal Montajes, S.L. (Espanha)\n• Vicoinox, S.A. (aço inoxidável)\n\n**Números-chave:**\n• +200 colaboradores\n• +40.000 m² de área produtiva\n• Presença em +15 países\n• 4 continentes\n\nAtuamos na metalomecânica pesada há mais de 24 anos, com projetos na Europa, América do Sul e África.`,
  },
  capacidades: {
    keywords: ['capacidade', 'fábrica', 'equipamento', 'produção', 'máquina', 'instalação'],
    response: `As nossas instalações contam com:\n\n🏭 **Área coberta:** 40.000 m²\n\n**Equipamentos principais:**\n• Gabinete de desenho técnico (Tekla/AutoCAD)\n• Corte oxicorte — até 200mm\n• Corte plasma — até 20mm\n• Calandragem — até 3000mm × 30mm (aço-carbono)\n• Quinadeiras, serrotes, guilhotinas\n• 5 Pontes rolantes (até 30 ton)\n• 2 Robots de soldadura MIG/MAG\n• Decapagem ao grau Sa2½\n• Pintura segundo EN 12944\n\nPode consultar a página completa de Capacidades.`,
  },
  contacto: {
    keywords: ['contacto', 'telefone', 'email', 'falar', 'ligar', 'comunicar'],
    response: `Pode contactar-nos através de:\n\n📞 **Telefone:** (+351) 239 644 616\n📠 **Fax:** (+351) 239 644 615\n📧 **Email:** vicometal@vicometal.pt\n\n**Horário:** Segunda a Sexta, 08:00 – 17:30\n\nOu utilize o formulário na página de Contactos para uma resposta por escrito.`,
  },
  setores: {
    keywords: ['setor', 'sector', 'indústria', 'área', 'mercado', 'cliente'],
    response: `Atuamos nos seguintes sectores industriais:\n\n• 🏭 Celuloses (papel e biomassa)\n• ⚙️ Cimenteiras & Cal\n• 🔥 Argilas expandidas & Cerâmicas\n• 🏗️ Siderurgias & Fundições\n• ⛏️ Minas\n• 🧪 Química & Farmacêutica\n• 🍃 Biomassa & Energia\n• 🥫 Indústria Alimentar\n• ♻️ Reciclagem\n\nTemos experiência em projetos de grande escala em todos estes sectores, tanto em Portugal como internacionalmente.`,
  },
  internacional: {
    keywords: ['internacional', 'exportação', 'país', 'europa', 'estrangeiro', 'abroad'],
    response: `A Vicometal tem presença internacional em:\n\n🇵🇹 Portugal (sede)\n🇪🇸 Espanha (Vicometal Montajes, S.L.)\n🇫🇷 França\n🇩🇪 Alemanha\n🇫🇮 Finlândia\n🇧🇷 Brasil\n🇦🇴 Angola\n🇲🇦 Marrocos\n\nE mais de 15 países em 4 continentes.\n\nA nossa primeira experiência internacional foi em 2006 e desde então temos crescido consistentemente no mercado europeu e além.`,
  },
  reclamacao: {
    keywords: ['reclamação', 'reclamar', 'queixa', 'livro'],
    response: `Para apresentar uma reclamação, pode:\n\n📋 **Livro de Reclamações Online:**\nhttps://www.livroreclamacoes.pt\n\nTambém pode contactar-nos diretamente por email (vicometal@vicometal.pt) ou telefone ((+351) 239 644 616) para resolver qualquer questão.\n\nA satisfação dos nossos clientes é uma prioridade absoluta.`,
  },
}

const fallbackResponses = [
  'Obrigado pela sua pergunta. Para uma resposta mais detalhada, sugiro que nos contacte diretamente pelo telefone (+351) 239 644 616 ou email vicometal@vicometal.pt.',
  'Essa é uma boa questão! Para lhe dar a melhor resposta, o ideal seria falar com a nossa equipa comercial. Posso ajudá-lo com informações sobre serviços, orçamentos, ou localização?',
  'Não tenho informação suficiente para responder a essa questão específica, mas posso ajudar com:\n• Serviços oferecidos\n• Pedido de orçamento\n• Localização e contactos\n• Certificações\n• Capacidades industriais\n\nSobre qual tema gostaria de saber mais?',
]

const suggestions = [
  { label: 'Serviços', question: 'Que serviços oferecem?' },
  { label: 'Orçamento', question: 'Como posso pedir um orçamento?' },
  { label: 'Localização', question: 'Onde estão localizados?' },
  { label: 'Certificações', question: 'Quais as vossas certificações?' },
]

function generateResponse(input: string): string {
  const normalized = input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u0327]/g, '')

  let bestMatch: { response: string } | null = null
  let bestScore = 0

  for (const data of Object.values(knowledge)) {
    let score = 0
    for (const keyword of data.keywords) {
      const normalizedKeyword = keyword
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f\u0327]/g, '')
      if (normalized.includes(normalizedKeyword)) {
        score += normalizedKeyword.length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = data
    }
  }

  if (bestMatch && bestScore > 3) {
    return bestMatch.response
  }

  if (/^(ol[aá]|bom dia|boa tarde|boa noite|hey|hi|hello)/i.test(normalized)) {
    return 'Olá! 👋 Bem-vindo à Vicometal. Como posso ajudá-lo hoje?\n\nPosso dar informações sobre:\n• Serviços e capacidades\n• Orçamentos\n• Certificações\n• Localização e contactos'
  }

  if (/^(obrigad|thank|agradec)/i.test(normalized)) {
    return 'De nada! 😊 Se precisar de mais alguma informação, não hesite em perguntar. Estamos aqui para ajudar!'
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

function formatMessage(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-on-surface font-semibold">$1</strong>')
    .replace(/\n/g, '<br/>')
    .replace(/• /g, '&bull; ')
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Olá! 👋 Sou o assistente virtual da Vicometal.\n\nPosso ajudá-lo com informações sobre os nossos serviços, capacidades, orçamentos ou qualquer outra questão.\n\nComo posso ajudar?',
      type: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  function handleSend(message: string) {
    if (!message.trim()) return
    setMessages((prev) => [...prev, { text: message, type: 'user' }])
    setShowSuggestions(false)
    setIsTyping(true)

    const delay = 800 + Math.random() * 1200
    setTimeout(() => {
      setIsTyping(false)
      const response = generateResponse(message)
      setMessages((prev) => [...prev, { text: response, type: 'bot' }])
    }, delay)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    handleSend(input)
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[76px] right-0 w-[380px] max-h-[560px] bg-[#1a1d1f] border border-wireframe-stroke rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0d0f10] border-b border-wireframe-stroke">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blueprint-cyan/20 border border-blueprint-cyan/40 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blueprint-cyan">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="4" />
                    <circle cx="9" cy="15" r="1" fill="currentColor" />
                    <circle cx="15" cy="15" r="1" fill="currentColor" />
                    <path d="M9 18h6" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-sm font-semibold text-on-surface block">Assistente Vicometal</span>
                  <span className="font-mono text-[10px] text-blueprint-cyan/70 uppercase tracking-wider">Online — Resposta imediata</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
                aria-label="Fechar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 max-h-[320px] scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-4 py-3 text-[13px] leading-relaxed ${
                      msg.type === 'user'
                        ? 'bg-blueprint-cyan/20 border border-blueprint-cyan/30 text-on-surface rounded-xl rounded-br-sm'
                        : 'bg-white/[0.04] border border-wireframe-stroke text-on-surface-variant rounded-xl rounded-bl-sm'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.04] border border-wireframe-stroke rounded-xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:200ms]" />
                    <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:400ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-3">
                {suggestions.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => handleSend(s.question)}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-wireframe-stroke text-blueprint-cyan hover:bg-blueprint-cyan/10 hover:border-blueprint-cyan/40 transition-all"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-wireframe-stroke">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva a sua mensagem..."
                className="flex-1 bg-transparent border-none outline-none font-body text-sm text-on-surface placeholder:text-on-surface-variant/50"
                autoComplete="off"
              />
              <button
                type="submit"
                className="w-8 h-8 flex items-center justify-center bg-blueprint-cyan/20 border border-blueprint-cyan/40 text-blueprint-cyan rounded-full hover:bg-blueprint-cyan/30 transition-colors"
                aria-label="Enviar"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Toggle */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowBadge(false)
        }}
        className="w-14 h-14 rounded-full bg-blueprint-cyan text-[#0d0f10] flex items-center justify-center shadow-[0_8px_24px_rgba(0,240,255,0.3)] hover:scale-110 hover:shadow-[0_12px_32px_rgba(0,240,255,0.4)] transition-all relative"
        aria-label="Assistente Virtual"
      >
        {!isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        )}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#111415] animate-pulse">
            1
          </span>
        )}
      </button>
    </div>
  )
}
