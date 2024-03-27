import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Seamless User Authentication with Our <br className="sm:block hidden" /> SecureGrafix API.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With our Graphical Password API, authentication is secure, user-friendly, and seamless. Your users can create and manage their graphical passwords with ease, while our backend system ensures their protection. Say goodbye to clunky authentication systems and hello to a reliable and intuitive solution. Incorporate our API to provide seamless user authentication for your application.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
