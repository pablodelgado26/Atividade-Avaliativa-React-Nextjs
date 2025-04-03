import Divisao from "./components/divisao";
import Footer from "./components/footer";
import Header from "./components/header";
import Left from "./components/left";
import Right from "./components/right";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Divisao>
        <Left /> 
        <Right />           
      </Divisao>
      
      <Footer />
    </div>
  );
}
