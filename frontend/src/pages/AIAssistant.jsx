import { useState } from "react";
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
    description: "Improve your resume with AI-powered suggestions.",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ATS Analysis",
    description: "Check how well your resume matches a job description.",
    icon: Target,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Analyze Job Description",
    description: "Understand the skills and requirements recruiters expect.",
    icon: BriefcaseBusiness,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Mock Interview",
    description: "Practice technical and HR interviews with AI.",
    icon: MessageCircle,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Cover Letter",
    description: "Generate personalized cover letters instantly.",
    icon: PenSquare,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Career Roadmap",
    description: "Plan your learning journey based on your goals.",
    icon: GraduationCap,
    color: "bg-cyan-100 text-cyan-600",
  },
];


function AIAssistant() {
    const [showHistory, setShowHistory] = useState(false);
  return (
    <div className="relative flex h-[calc(100vh-2rem)] flex-col rounded-3xl bg-slate-100">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
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

      <div className="mx-auto flex max-w-6xl flex-col items-center">

  {/* AI Avatar */}
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-[0_12px_40px_rgba(37,99,235,0.35)]">

    <Bot
      size={44}
      strokeWidth={2.2}
      className="text-white"
    />

  </div>

  {/* Heading */}
  <h1 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
    AI Career Assistant
  </h1>

  {/* Subtitle */}
  <p className="mt-4 max-w-3xl text-center text-base leading-6 text-slate-500">
    Your intelligent companion for resumes, interviews,
    job applications, ATS optimization, and career growth.
  </p>

  {/* Section Title */}
  <h2 className="mt-8 text-2xl font-semibold text-slate-800">
    What would you like to do today?
  </h2>

  {/* Prompt Cards */}
  <div className="mt-8 grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">

    {promptCards.map((card) => {
      const Icon = card.icon;

      return (
        <button
          key={card.title}
          className="group rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
        >
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${card.color}`}
          >
            <Icon size={18} />
          </div>

          <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-blue-600">
            {card.title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-slate-500">
            {card.description}
          </p>
        </button>
      );
    })}

  </div>

</div>
      </main>

      {/* Chat Input */}
      <div className="border-t border-slate-200 bg-white p-6">

        <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm">

          <button className="rounded-full p-2 transition hover:bg-slate-100">
            <Plus size={20} />
          </button>

          <input
            type="text"
            placeholder="Ask anything about your career..."
            className="flex-1 bg-transparent text-slate-700 outline-none"
          />

          <button className="rounded-full p-2 transition hover:bg-slate-100">
            <Mic size={20} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700">
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

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">

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