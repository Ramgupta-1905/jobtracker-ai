import { useEffect, useRef, useState } from "react";
import {
  History,
  Plus,
  Mic,
  ArrowUp,
  X,
  MessageSquare,
  Bot,
  FileText,
  Target,
  BriefcaseBusiness,
  MessageCircle,
  PenSquare,
  GraduationCap,
} from "lucide-react";

const demoChats = [
  { id: 1, title: "Resume Review", time: "2h ago" },
  { id: 2, title: "Google Interview", time: "Yesterday" },
  { id: 3, title: "ATS Analysis", time: "2 days ago" },
  { id: 4, title: "Career Roadmap", time: "Last Week" },
];

const promptCards = [
  {
    title: "Review Resume",
    description: "Improve your resume",
    prompt: "Review my resume and suggest improvements.",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ATS Analysis",
    description: "Match your resume to a job description.",
    prompt: "Analyze my resume for ATS compatibility.",
    icon: Target,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Analyze Job Description",
    description: "Understand role requirements",
    prompt: "Analyze this job description and explain the required skills.",
    icon: BriefcaseBusiness,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Mock Interview",
    description: "Practice with AI",
    prompt: "Conduct a mock interview for a Software Engineer role.",
    icon: MessageCircle,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Cover Letter",
    description: "Generate personalized cover letter",
    prompt: "Generate a professional cover letter.",
    icon: PenSquare,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Career Roadmap",
    description: "Plan your learning journey",
    prompt: "Create a career roadmap for becoming a Full Stack Developer.",
    icon: GraduationCap,
    color: "bg-cyan-100 text-cyan-600",
  },
];


function AIAssistant() {
    const [showHistory, setShowHistory] = useState(false);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const [isTyping, setIsTyping] = useState(false);
const messagesEndRef = useRef(null);

const handleSend = () => {
  if (!message.trim()) return;

  const userMessage = {
    sender: "user",
    text: message,
  };

  const aiMessage = {
    sender: "ai",
    text:   "Hello! I'm your AI Career Assistant. This is a demo response. Once the backend is connected, I'll be able to review resumes, analyze job descriptions, generate cover letters, and help you prepare for interviews.",
  };

  setMessages((prev) => [...prev, userMessage]);

setMessage("");

setIsTyping(true);

setTimeout(() => {
  setMessages((prev) => [...prev, aiMessage]);
  setIsTyping(false);
}, 1200);
};

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, isTyping]);


const handleNewChat = () => {
  setMessages([]);
  setMessage("");
  setShowHistory(false);
};

  return (
    <div className="relative flex h-[calc(100vh-2rem)] flex-col rounded-3xl bg-slate-100">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            AI Career Assistant
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Your intelligent companion for resumes, interviews and career growth.
          </p>
        </div>

        <button
  onClick={() => setShowHistory(true)}
  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100"
>
  <History size={20} />
</button>

      </header>

      {/* Conversation Area */}
      <main className="flex-1 overflow-y-auto px-8 py-5">
{messages.length === 0 ? (

      <div className="mx-auto flex max-w-6xl flex-col items-center">

  {/* AI Avatar */}
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-[0_12px_40px_rgba(37,99,235,0.35)]">

    <Bot
      size={35}
      strokeWidth={2.5}
      className="text-white"
    />

  </div>

  {/* Heading */}
  <h1 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
    AI Career Assistant
  </h1>

  {/* Subtitle */}
  <p className="mt-2 max-w-xl text-center text-base leading-6 text-slate-500">
    Your intelligent companion for resumes, interviews,
    job applications, ATS optimization, and career growth.
  </p>

  {/* Section Title */}
  <h2 className="mt-5 text-xl font-semibold text-slate-800">
    What would you like to do today?
  </h2>

  {/* Prompt Cards */}
  <div className="mt-3 grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">

    {promptCards.map((card) => {
      const Icon = card.icon;

      return (
        <button
        onClick={() => setMessage(card.prompt)}
  key={card.title}
  className="group rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
>
  {/* Icon + Title */}
  <div className="flex items-center gap-3">

    <div
      className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.color}`}
    >
      <Icon size={18} />
    </div>

    <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-blue-600">
      {card.title}
    </h3>

  </div>

  {/* Description */}
  <p className=" ml-12 text-xs text-slate-500">
    {card.description}
  </p>

</button>
      );
    })}

  </div>

</div>
) : (
                <div className="mx-auto max-w-4xl space-y-8">

  {messages.map((msg, index) => (

    <div
      key={index}
      className={`flex ${
        msg.sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div className="max-w-[75%]">

        {/* Sender */}

        <div
          className={`mb-2 flex items-center gap-2 text-sm font-medium ${
            msg.sender === "user"
              ? "justify-end text-slate-500"
              : "justify-start text-slate-700"
          }`}
        >

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-700"
            }`}
          >

            {msg.sender === "user" ? "R" : <Bot size={16} />}

          </div>

          <span>

            {msg.sender === "user"
              ? "You"
              : "AI Career Assistant"}

          </span>

        </div>

        {/* Bubble */}

        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            msg.sender === "user"
              ? "bg-blue-600 text-white"
              : "border border-slate-200 bg-white text-slate-800"
          }`}
        >

          <p className="leading-7">
            {msg.text}
          </p>

        </div>

      </div>

    </div>

  ))}
  {isTyping && (
  <div className="flex justify-start">

    <div className="max-w-[75%]">

      {/* Sender */}
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
          <Bot size={16} />
        </div>

        <span>AI Career Assistant</span>

      </div>

      {/* Typing Bubble */}
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>

    </div>
     <div ref={messagesEndRef} />
  </div>
  
)}

</div>
  )}
      </main>

      {/* Chat Input */}
      <div className="border-t border-slate-200 bg-white p-6">

        <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm">

          <button className="rounded-full p-2 transition hover:bg-slate-100">
            <Plus size={20} />
          </button>

          <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleSend();
  }
}}
  placeholder="Ask anything about your career..."
  className="flex-1 bg-transparent text-slate-700 outline-none"
/>

          <button className="rounded-full p-2 transition hover:bg-slate-100">
            <Mic size={20} />
          </button>

          <button 
           onClick={handleSend}
            disabled={!message.trim()}
           className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition ${
  message.trim()
    ? "bg-blue-600 hover:bg-blue-700"
    : "cursor-not-allowed bg-slate-300"
}`}>
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

      {showHistory && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setShowHistory(false)}
      className="absolute inset-0 z-40 bg-black/20"
    />

    {/* History Panel */}
    <div className="absolute inset-y-0 right-0 z-50 flex w-80 flex-col border-l border-slate-200 bg-white shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-5">

        <div>
          <h2 className="text-lg font-semibold">
            Previous Chats
          </h2>

          <p className="text-sm text-slate-500">
            Continue where you left off
          </p>
        </div>

        <button
          onClick={() => setShowHistory(false)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          <X size={18} />
        </button>

      </div>

      {/* New Chat */}
      <div className="p-4">

        <button 
         onClick={handleNewChat}
         className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">

          <Plus size={18} />
          New Chat

        </button>

      </div>

      {/* Chats */}
      <div className="flex-1 space-y-2 overflow-y-auto px-3 pb-4">

        {demoChats.map((chat) => (
          <button
            key={chat.id}
            className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition hover:bg-slate-100"
          >

            <div className="mt-1 rounded-lg bg-blue-100 p-2">
              <MessageSquare
                size={16}
                className="text-blue-600"
              />
            </div>

            <div>

              <h3 className="font-medium text-slate-800">
                {chat.title}
              </h3>

              <p className="text-xs text-slate-500">
                {chat.time}
              </p>

            </div>

          </button>
        ))}

      </div>

    </div>
  </>
)}

    </div>
  );
}

export default AIAssistant;