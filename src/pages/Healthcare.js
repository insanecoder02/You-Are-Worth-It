import "./Healthcare.css";
const Healthcare = () => {
  return (
    <section className="desktop-1" id="mainpage">
      <h1 className="forum" id="FORUM">
        FORUM
      </h1>
      <div className="early-diagnosis-is-key-to-empo-parent" id="PCOS">
        <p className="early-diagnosis-is" id="PCOS_para">
          early diagnosis is key to empower you
        </p>
        <h4 className="pcos" id="PCOS_Main">
          <p className="cervical">PCOS</p>
        </h4>
        <img
          className="frame-child"
          id="PCOS_img"
          alt=""
          src="/ellipse-4.svg"
        />
      </div>
      <button className="tap-button" id="PCOS_tap">
        <div className="tap-button-child" />
        <img className="arcticonstap-tap" alt="" src="/arcticonstaptap.svg" />
      </button>
      <div
        className="save-life-by-detecting-cervica-parent"
        id="Cervical_Cancer"
      >
        <p className="save-life-by" id="cc_text">
          Save life by detecting cervical cancer early
        </p>
        <h4 className="cervical-cancer" id="cc_main">
          <p className="cervical">CERVICAL</p>
          <p className="cervical">CANCER</p>
        </h4>
        <img className="frame-item" id="cc_img" alt="" src="/ellipse-3.svg" />
      </div>
      <button className="tap-button1" id="cc_tap">
        <div className="tap-button-child" />
        <img className="arcticonstap-tap" alt="" src="/arcticonstaptap.svg" />
      </button>
      <div className="knowing-your-breasts-could-sav-parent" id="Breast_Cancer">
        <p className="knowing-your-breasts" id="BC_para">
          Knowing Your Breasts Could Save Your Life
        </p>
        <h4 className="breast-cancer" id="BC">
          <p className="cervical">BREAST</p>
          <p className="cervical">CANCER</p>
        </h4>
        <img className="frame-inner" id="BC_img" alt="" src="/ellipse-2.svg" />
      </div>
      <button className="tap-button2" id="bc_tap">
        <img className="tap-button-inner" alt="" src="/ellipse-1.svg" />
        <button className="arcticonstap-tap2">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector.svg" />
          <img className="vector-icon2" alt="" src="/vector.svg" />
        </button>
      </button>
      <h3 className="ai-detection">AI DETECTION</h3>
    </section>
  );
};

export default Healthcare;