import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner 
        title="Meme do Dia: Quando seu código funciona de primeira"
        description="Este momento raro que todos os desenvolvedores sonham em experimentar!"
        image="https://i.imgur.com/vldGJnz.jpg"
        likes={2452}
        comments={387}
        author="SuperCoder"
        authorAvatar="https://i.pravatar.cc/150?img=20"
      />
      <Footer />
    </div>
  );
}
