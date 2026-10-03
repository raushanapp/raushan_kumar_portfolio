import React from "react";
import "./ResumeModal.css";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";

const viewUrl = (fileId) => `https://drive.google.com/file/d/${fileId}/view`;
const downloadUrl = (fileId) =>
  `https://drive.google.com/uc?export=download&id=${fileId}`;

export const RESUME_OPTIONS = [
  { id: "fullstack", label: "Full-Stack Developer", fileId: "1Q4MqAWIpdb2-riNSmlp7bR3lsg-KgwKb" },
  { id: "frontend", label: "Frontend Developer", fileId: "1jWAXo7GOkSdveGo0dBOURRmoXErWFh6P" },
];

const ACTIONS = [
  { id: "view", label: "View", getUrl: viewUrl },
  { id: "download", label: "Download", getUrl: downloadUrl },
];

export const ResumeModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleAction = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal glass-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="resume-modal__close"
              aria-label="close"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
            <h3 id="resume-modal-title">Select resume type</h3>
            <div className="resume-modal__options">
              {RESUME_OPTIONS.map(({ id, label, fileId }) => (
                <div key={id} className="resume-modal__option glass-panel">
                  <span>{label}</span>
                  <div className="resume-modal__actions">
                    {ACTIONS.map((action) => (
                      <button
                        key={action.id}
                        type="button"
                        className="resume-modal__action"
                        onClick={() => handleAction(action.getUrl(fileId))}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
