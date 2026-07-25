import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const WorkflowContext = createContext();

export function WorkflowProvider({ children }) {
  const [workflows, setWorkflows] = useState(() => {
    const savedWorkflows = localStorage.getItem("flowpilot-workflows");

    if (savedWorkflows) {
      return JSON.parse(savedWorkflows);
    }

    return [
      {
        id: 1,
        name: "Customer Email Automation",
        trigger: "Email",
        action: "Summarize",
        status: "Running",
      },
      {
        id: 2,
        name: "Invoice Processor",
        trigger: "Schedule",
        action: "Extract Data",
        status: "Completed",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "flowpilot-workflows",
      JSON.stringify(workflows)
    );
  }, [workflows]);

  const addWorkflow = (workflow) => {
    setWorkflows((prev) => [
      ...prev,
      {
        id: Date.now(),
        status: "Running",
        ...workflow,
      },
    ]);
  };

  const deleteWorkflow = (id) => {
    setWorkflows((prev) =>
      prev.filter((workflow) => workflow.id !== id)
    );
  };

  const updateWorkflow = (updatedWorkflow) => {
    setWorkflows((prev) =>
      prev.map((workflow) =>
        workflow.id === updatedWorkflow.id
          ? updatedWorkflow
          : workflow
      )
    );
  };

  return (
    <WorkflowContext.Provider
      value={{
        workflows,
        addWorkflow,
        deleteWorkflow,
        updateWorkflow,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  return useContext(WorkflowContext);
}