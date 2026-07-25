import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useWorkflow } from "../context/WorkflowContext";
import "../styles/workflow.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateWorkflow() {
  const { addWorkflow } = useWorkflow();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    trigger: "Email",
    action: "Summarize",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  addWorkflow(form);

  toast.success("Workflow created successfully!");

  setForm({
    name: "",
    trigger: "Email",
    action: "Summarize",
  });

  navigate("/dashboard");
};

  return (
    <DashboardLayout>
      <div className="dashboard-card">
        <h1>Create Workflow</h1>

        <form onSubmit={handleSubmit} className="workflow-form">

          <label>Workflow Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter workflow name"
            required
          />

          <label>Trigger</label>

          <select
            name="trigger"
            value={form.trigger}
            onChange={handleChange}
          >
            <option>Email</option>
            <option>Schedule</option>
            <option>Webhook</option>
            <option>API</option>
          </select>

          <label>AI Action</label>

          <select
            name="action"
            value={form.action}
            onChange={handleChange}
          >
            <option>Summarize</option>
            <option>Translate</option>
            <option>Generate Reply</option>
            <option>Extract Data</option>
          </select>

          <button type="submit">
            Save Workflow
          </button>

        </form>
      </div>
    </DashboardLayout>
  );
}

export default CreateWorkflow;