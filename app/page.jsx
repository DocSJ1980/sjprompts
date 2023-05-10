import Feed from "@components/Feed"
const Home = () => {
    return (
        <section className="head_text text-centerw-full flex-center justify-center items-center flex-col">
            <h1 className="text-center">Discover & Share
                <br className="" />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">sjPrompts is the ultimate tool for boosting creativity and productivity. Generate unique prompts for writing, brainstorming, and more. Whether you're a novelist or simply seeking daily inspiration, sjPrompts has something for everyone. With an intuitive interface and powerful algorithms, sjPrompts helps unlock your potential and achieve your goals. Try sjPrompts today and elevate your creative process!</p>
            <Feed />
        </section>
    )
}

export default Home