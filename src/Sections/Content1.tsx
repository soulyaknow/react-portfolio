function Content1() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 h-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold flex flex-col">
          <span className="font-semibold text-3xl">I'M</span>
          <span className="typing-effect">RANEL SOLIANO</span>
        </h1>
        <p className="text-xl mt-2">Web Developer</p>
        <button className="btn btn-outline btn-primary mt-4">Contact Me</button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/ranel.png"
          alt="Profile"
          className="max-h-full max-w-full bg-white"
        />
      </div>
    </div>
  );
}

export default Content1;
