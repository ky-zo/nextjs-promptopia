import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
        inventore officia quam cupiditate at modi. Totam ea illum, unde atque
        enim possimus dolore soluta rerum nihil ducimus consequatur est harum!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
