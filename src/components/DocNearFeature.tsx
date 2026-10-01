import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  PhoneCall,
  UserCheck,
  Building2,
  AlertCircle,
  Plus
} from "lucide-react";

export const DocNearFeature: React.FC = () => {
  // Interactive prototype state
  const [activeTab, setActiveTab] = useState<"patient" | "reception">("patient");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Sarah Jenkins (Cardiology)");
  const [selectedShift, setSelectedShift] = useState<"morning" | "evening">("morning");
  const [patientName, setPatientName] = useState("Alex Morgan");
  const [patientPhone, setPatientPhone] = useState("+1 (555) 234-8901");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Roster items simulating the clinic desk
  const [roster, setRoster] = useState([
    {
      id: "DN-101",
      patient: "Eleanor Vance",
      source: "Online Patient Booking",
      doctor: "Dr. Sarah Jenkins",
      shift: "Morning (09:00 - 12:30)",
      status: "Verified & Admitted",
      time: "09:15 AM"
    },
    {
      id: "DN-102",
      patient: "Marcus Thorne",
      source: "Telephone Call-In (Desk)",
      doctor: "Dr. Arun Kumar",
      shift: "Morning (09:00 - 12:30)",
      status: "Awaiting Arrival",
      time: "10:30 AM"
    }
  ]);

  const [phoneWalkinName, setPhoneWalkinName] = useState("");

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: `DN-${103 + roster.length}`,
      patient: patientName || "Guest Patient",
      source: "Online Patient Booking",
      doctor: selectedDoctor,
      shift: selectedShift === "morning" ? "Morning (09:00 - 12:30)" : "Evening (16:30 - 20:00)",
      status: "Awaiting Arrival",
      time: selectedShift === "morning" ? "11:00 AM" : "05:15 PM"
    };
    setRoster((prev) => [newEntry, ...prev]);
    setBookingSuccess(true);
    setTimeout(() => {
      setActiveTab("reception");
    }, 1200);
  };

  const handleVerifyArrival = (id: string) => {
    setRoster((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Verified & Admitted" } : item
      )
    );
  };

  const handleAddTelephoneEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneWalkinName.trim()) return;
    const newEntry = {
      id: `DN-${200 + roster.length}`,
      patient: phoneWalkinName,
      source: "Telephone Call-In (Desk)",
      doctor: "Dr. Sarah Jenkins",
      shift: "Morning (09:00 - 12:30)",
      status: "Awaiting Arrival",
      time: "11:45 AM"
    };
    setRoster((prev) => [newEntry, ...prev]);
    setPhoneWalkinName("");
  };

  return (
    <section id="doc-near" className="py-24 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <span>Primary Product Study</span>
            <span className="text-[#555]">/</span>
            <span>Healthcare Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Doc Near: Re-architecting Local Clinic Appointments
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
            A local-first platform designed to replace disorganized phone calls and paper rosters with structured discovery and verified clinic arrivals.
          </p>
        </div>

        {/* The Problem & The Idea Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 border-b border-[#242424] pb-16">
          {/* The Problem */}
          <div className="bg-[#181818] p-6 md:p-8 rounded-lg border border-[#272727]">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
              The Problem
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Friction in Local Healthcare Discovery
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Local clinics often rely heavily on phone calls and manual appointment handling, making appointment discovery and booking inconvenient for patients.
            </p>
            <ul className="space-y-2 text-xs text-[#888]">
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Uncertainty whether a specific doctor is on duty during morning or evening shifts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Endless phone lines occupied during peak clinic opening hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Front-desk staff balancing paper sheets and patient phone inquiries simultaneously.</span>
              </li>
            </ul>
          </div>

          {/* The Idea */}
          <div className="bg-[#181818] p-6 md:p-8 rounded-lg border border-[#272727]">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              The Idea
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              A Direct, Local-First Platform
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Build a local-first platform that allows patients to discover doctors and clinics and request appointments digitally, while integrating seamlessly with existing clinic workflows.
            </p>
            <ul className="space-y-2 text-xs text-[#888]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Real-time shift visibility (Morning & Evening clinic blocks).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Quick digital reservation without tedious multi-step signups.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Unified queue supporting both online bookings and telephone call-ins.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Flow Diagram */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1">
              End-to-End Journey
            </span>
            <h3 className="text-2xl font-bold text-white">Product Flow</h3>
          </div>

          {/* Step Sequence Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { step: "01", title: "Patient", desc: "User opens local discovery" },
              { step: "02", title: "Find Doctor", desc: "Specialty & vicinity match" },
              { step: "03", title: "Choose Clinic", desc: "Select verified facility" },
              { step: "04", title: "Date & Shift", desc: "Morning or evening block" },
              { step: "05", title: "Book Slot", desc: "Instant request dispatch" },
              { step: "06", title: "Clinic Approval", desc: "Verified upon arrival" },
              { step: "07", title: "Confirmed", desc: "Patient admitted to room" }
            ].map((node, i) => (
              <div
                key={node.step}
                className="bg-[#181818] p-4 rounded-md border border-[#272727] relative group hover:border-emerald-600/50 transition-colors"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-[#777] mb-2">
                  <span>{node.step}</span>
                  {i < 6 && <ArrowRight className="w-3 h-3 text-[#555] hidden lg:block" />}
                </div>
                <div className="text-xs font-bold text-white mb-1">{node.title}</div>
                <div className="text-[11px] text-[#888] leading-snug">{node.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Decisions Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1">
              System Architecture
            </span>
            <h3 className="text-2xl font-bold text-white">Crucial MVP Design Decisions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#181818] rounded-lg border border-[#282828]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <UserCheck className="w-4 h-4" />
                <span>PRINCIPLE 01</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Attendance-Based Confirmation
              </h4>
              <p className="text-xs sm:text-sm text-[#999] leading-relaxed">
                The appointment does not automatically become completed simply because a patient booked online. The clinic or doctor approves the appointment when the patient arrives and reports in person at the clinic reception. This prevents ghost no-shows from distorting doctor consultation time.
              </p>
            </div>

            <div className="p-6 bg-[#181818] rounded-lg border border-[#282828]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>PRINCIPLE 02</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Unified Telephone + Digital Roster
              </h4>
              <p className="text-xs sm:text-sm text-[#999] leading-relaxed">
                Local clinics serve diverse demographics who frequently call by telephone. Rather than forcing a pure digital-only system that breaks existing desk operations, Doc Near includes a rapid desk entry form so telephone bookings and online reservations sit in one synchronized schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Prototype Sandbox */}
        <div className="bg-[#181818] rounded-xl border border-[#2C2C2C] overflow-hidden">
          {/* Sandbox Controls Bar */}
          <div className="bg-[#202020] px-6 py-4 border-b border-[#2C2C2C] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Interactive Concept Prototype
              </div>
              <div className="text-sm font-semibold text-white">
                Test the Two-Sided Clinic & Patient Workflow
              </div>
            </div>

            {/* Segmented Tab Controls (Buttons for interactive state) */}
            <div className="flex items-center bg-[#151515] p-1 rounded-md border border-[#2E2E2E]">
              <button
                onClick={() => setActiveTab("patient")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  activeTab === "patient"
                    ? "bg-[#2A2A2A] text-white shadow-sm"
                    : "text-[#888] hover:text-white"
                }`}
              >
                1. Patient Booking View
              </button>
              <button
                onClick={() => setActiveTab("reception")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  activeTab === "reception"
                    ? "bg-[#2A2A2A] text-white shadow-sm"
                    : "text-[#888] hover:text-white"
                }`}
              >
                2. Clinic Reception Desk View
              </button>
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-6 md:p-8">
            {activeTab === "patient" ? (
              <div className="max-w-xl mx-auto">
                <div className="text-center mb-6">
                  <span className="text-xs font-mono text-[#888] block mb-1">PATIENT SIMULATION</span>
                  <h4 className="text-lg font-bold text-white">Book Clinic Appointment</h4>
                  <p className="text-xs text-[#999]">
                    Select doctor and shift, then see your request appear in the clinic reception roster.
                  </p>
                </div>

                <form onSubmit={handlePatientSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                      Doctor & Specialty
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full bg-[#141414] border border-[#333] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Dr. Sarah Jenkins (Cardiology)">Dr. Sarah Jenkins · Cardiology (St. Jude Clinic)</option>
                      <option value="Dr. Arun Kumar (General Medicine)">Dr. Arun Kumar · General Medicine (Central Care)</option>
                      <option value="Dr. Maya Patel (Pediatrics)">Dr. Maya Patel · Pediatrics (Community Hospital)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                        Clinic Shift
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedShift("morning")}
                          className={`p-2 text-xs rounded border text-center transition-colors ${
                            selectedShift === "morning"
                              ? "bg-white text-black font-semibold border-white"
                              : "bg-[#141414] text-[#888] border-[#333]"
                          }`}
                        >
                          Morning
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedShift("evening")}
                          className={`p-2 text-xs rounded border text-center transition-colors ${
                            selectedShift === "evening"
                              ? "bg-white text-black font-semibold border-white"
                              : "bg-[#141414] text-[#888] border-[#333]"
                          }`}
                        >
                          Evening
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-[#141414] border border-[#333] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                        placeholder="Alex Morgan"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#888] uppercase mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full bg-[#141414] border border-[#333] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer mt-4"
                  >
                    {bookingSuccess ? "Appointment Requested! Switching to Desk..." : "Request Appointment Slot"}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2C2C2C]">
                  <div>
                    <span className="text-xs font-mono text-[#888] block mb-0.5">FRONT-DESK ROSTER CONSOLE</span>
                    <h4 className="text-base font-bold text-white">St. Jude Community Clinic — Daily Queue</h4>
                  </div>

                  {/* Quick Telephone Add Form */}
                  <form onSubmit={handleAddTelephoneEntry} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={phoneWalkinName}
                      onChange={(e) => setPhoneWalkinName(e.target.value)}
                      placeholder="Add phone call-in patient..."
                      className="bg-[#141414] border border-[#333] rounded px-3 py-1.5 text-xs text-white placeholder-[#666] focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#2A2A2A] hover:bg-[#333] text-white text-xs font-medium rounded flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Log Phone Entry</span>
                    </button>
                  </form>
                </div>

                {/* Table of Patients */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="text-[11px] font-mono text-[#777] border-b border-[#2A2A2A] uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Token ID</th>
                        <th className="py-2.5 px-3">Patient Name</th>
                        <th className="py-2.5 px-3">Booking Channel</th>
                        <th className="py-2.5 px-3">Assigned Shift</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Desk Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#242424]">
                      {roster.map((row) => (
                        <tr key={row.id} className="hover:bg-[#1D1D1D] transition-colors">
                          <td className="py-3 px-3 font-mono text-emerald-400">{row.id}</td>
                          <td className="py-3 px-3 font-semibold text-white">{row.patient}</td>
                          <td className="py-3 px-3 text-[#AAA]">{row.source}</td>
                          <td className="py-3 px-3 text-[#AAA]">{row.shift}</td>
                          <td className="py-3 px-3">
                            <span
                              className={`text-[11px] font-medium ${
                                row.status === "Verified & Admitted"
                                  ? "text-emerald-400"
                                  : "text-amber-400"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            {row.status !== "Verified & Admitted" ? (
                              <button
                                onClick={() => handleVerifyArrival(row.id)}
                                className="px-2.5 py-1 bg-white text-black hover:bg-slate-200 text-[11px] font-semibold rounded transition-colors cursor-pointer"
                              >
                                Admit On Arrival
                              </button>
                            ) : (
                              <span className="text-[11px] text-[#666] font-mono">Confirmed</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-[#262626] text-[11px] text-[#777] flex items-center justify-between">
                  <span>Front desk retains master authority to admit patient upon physical presence.</span>
                  <span className="font-mono text-emerald-400">Total in Queue: {roster.length}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
