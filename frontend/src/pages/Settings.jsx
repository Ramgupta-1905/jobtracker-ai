import { useState } from "react";
import { Palette, Lock, Bell, Cpu, HelpCircle } from "lucide-react";

export default function Settings() {
  // ✅ Default theme is Light
  const [theme, setTheme] = useState("light");

  const [notifications, setNotifications] = useState({
    email: false,
    interview: true,
    weekly: true,
    updates: false,
  });

  const [aiStyle, setAiStyle] = useState("Balanced");
  const [aiTone, setAiTone] = useState("Professional");

  // 🔒 Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      setPasswordMessage("❌ New password and Confirm password must match.");
      return;
    }
    if (!newPassword || !currentPassword) {
      setPasswordMessage("⚠ Please fill all fields.");
      return;
    }
    setPasswordMessage("✅ Password updated successfully.");
    // Here you’d call backend API to actually update password
  };

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          ⚙ Settings
        </h1>
        <p className="text-gray-500">
          Customize your JobTrack AI workspace and preferences.
        </p>
      </div>

      {/* 1️⃣ Appearance */}
      <Card icon={<Palette />} color="bg-blue-100" title="Appearance" desc="Customize the look of your workspace.">
        <div className="space-y-2">
          {["Light", "Dark", "System"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value={opt.toLowerCase()}
                checked={theme === opt.toLowerCase()}
                onChange={() => setTheme(opt.toLowerCase())}
              />
              {opt}
            </label>
          ))}
        </div>
      </Card>

      {/* 2️⃣ Change Password */}
      <Card icon={<Lock />} color="bg-red-100" title="Change Password" desc="Keep your account secure.">
        <div className="space-y-4">
          <Input label="Current Password" type="password" value={currentPassword} onChange={setCurrentPassword} />
          <Input label="New Password" type="password" value={newPassword} onChange={setNewPassword} />
          <Input label="Confirm Password" type="password" value={confirmPassword} onChange={setConfirmPassword} />

          <button
            onClick={handlePasswordUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Update Password
          </button>

          {passwordMessage && (
            <p className="text-sm mt-2 font-medium text-gray-700">{passwordMessage}</p>
          )}
        </div>
      </Card>

      {/* 3️⃣ Notifications */}
      <Card icon={<Bell />} color="bg-amber-100" title="Notifications" desc="Manage your notifications.">
        {Object.entries(notifications).map(([key, value]) => (
          <Toggle
            key={key}
            label={key.replace(/^\w/, (c) => c.toUpperCase()) + " Notifications"}
            enabled={value}
            onChange={(val) => setNotifications({ ...notifications, [key]: val })}
          />
        ))}
      </Card>

      {/* 4️⃣ AI Preferences */}
      <Card icon={<Cpu />} color="bg-purple-100" title="AI Preferences" desc="Customize AI behavior.">
        <div className="space-y-4">
          <Pills
            label="AI Response Style"
            options={["Short", "Balanced", "Detailed"]}
            selected={aiStyle}
            onSelect={setAiStyle}
          />
          <Pills
            label="Preferred Tone"
            options={["Professional", "Friendly", "Formal", "Creative"]}
            selected={aiTone}
            onSelect={setAiTone}
          />
        </div>
      </Card>

      {/* 5️⃣ Help & Support */}
      <Card icon={<HelpCircle />} color="bg-green-100" title="Help & Support">
        {["Help Center", "Contact Support", "Report a Bug", "Send Feedback", "About JobTrack AI"].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer transition"
          >
            <span>{item}</span>
            <span className="transform transition-transform group-hover:translate-x-1">›</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* 🔹 Reusable Components */

function Card({ icon, color, title, desc, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${color}`}>
          {icon}
        </div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          {desc && <p className="text-sm text-gray-500">{desc}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function Input({ label, type, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

function Toggle({ label, enabled, onChange }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span>{label}</span>
      <button
        onClick={() => onChange(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

function Pills({ label, options, selected, onSelect }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="flex gap-2 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-1 rounded-full border transition ${
              selected === opt
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
