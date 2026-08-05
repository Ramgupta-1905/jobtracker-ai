import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIAssistant() {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-2">
          <Sparkles size={20} className="text-violet-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            AI Assistant
          </h2>
          <p className="text-xs text-gray-500">
            Powered by JobTrack AI
          </p>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="rounded-2xl bg-gray-100 p-4">
        <p className="text-sm text-gray-700">
          👋 Hi there!
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          What would you like help with today?
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-full bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700 hover:bg-violet-100">
          Analyze Resume
        </button>

        <button className="rounded-full bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700 hover:bg-violet-100">
          Interview Prep
        </button>

        <button className="rounded-full bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700 hover:bg-violet-100">
          ATS Score
        </button>
      </div>

      {/* CTA */}
      <button 
      onClick={() => navigate("/ai-assistant")}
      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-medium text-white transition hover:bg-violet-700">
        Ask AI
        <ArrowRight size={16} />
      </button>
    </div>
  );
}