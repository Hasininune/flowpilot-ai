import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useWorkflow } from "../context/WorkflowContext";
import "../styles/workflow.css";

function Workflows() {
  const {
    workflows,
    deleteWorkflow,
    updateWorkflow,
  } = useWorkflow();

  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [editingWorkflow, setEditingWorkflow] = useState(null);

  const filtered = workflows.filter((workflow) =>
    workflow.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="dashboard-card">
        <div className="workflow-header">
          <h1>Workflows</h1>

          <input
            type="text"
            placeholder="Search workflow..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <p>No workflows found.</p>
        ) : (
          filtered.map((workflow) => (
            <div
              className="workflow-item"
              key={workflow.id}
            >
              <div>
                <h3>{workflow.name}</h3>

                <small>
                  Trigger: {workflow.trigger} | Action: {workflow.action}
                </small>

                <p>Status: {workflow.status}</p>
              </div>

              <div className="workflow-actions">
                <button
                  className="edit-btn"
                  onClick={() => setEditingWorkflow(workflow)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    setSelectedId(workflow.id);
                    setShowConfirm(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h2>Delete Workflow?</h2>

            <p>This action cannot be undone.</p>

            <div className="modal-buttons">
              <button
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  deleteWorkflow(selectedId);
                  setShowConfirm(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {editingWorkflow && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h2>Edit Workflow</h2>

            <input
              type="text"
              value={editingWorkflow.name}
              onChange={(e) =>
                setEditingWorkflow({
                  ...editingWorkflow,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={editingWorkflow.trigger}
              onChange={(e) =>
                setEditingWorkflow({
                  ...editingWorkflow,
                  trigger: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={editingWorkflow.action}
              onChange={(e) =>
                setEditingWorkflow({
                  ...editingWorkflow,
                  action: e.target.value,
                })
              }
            />

            <select
              value={editingWorkflow.status}
              onChange={(e) =>
                setEditingWorkflow({
                  ...editingWorkflow,
                  status: e.target.value,
                })
              }
            >
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
            </select>

            <div className="modal-buttons">
              <button
                onClick={() => {
                  updateWorkflow(editingWorkflow);
                  setEditingWorkflow(null);
                }}
              >
                Save
              </button>

              <button
                onClick={() => setEditingWorkflow(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Workflows;