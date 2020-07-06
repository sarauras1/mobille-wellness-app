import React, { useState } from "react";
import { motion } from "framer-motion";

const Indiano = () => {
  const [framerState, framerSetState] = useState(false);

  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

  return (
    <div className="Window-Open">
      <motion.div>
        <div onClick={framerEventHandler}>
          <h4>Indian Head Massage</h4>
        </div>
        {framerState && (
          <div
            style={{
              textAlign: "center",
              width: "300px,",
              margin: "auto",
              padding: "10px",
              boxShadow:
                "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            }}
          >
            Indian head massage is an ancient therapeutic treatment that has
            been practiced in India for thousands of years. Part of the Hindu
            health care practice of Ayurveda, Indian head massage focuses on
            your head, neck and shoulders and was originally used to improve
            scalp and hair condition. It is a deep massage, using a variety of
            pressure and techniques, including circular massage strokes on your
            scalp, deep tissue work on your shoulders, and stretching the neck.
            <br />
            <span className="price">From £ 45 per 45min</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Indiano;
