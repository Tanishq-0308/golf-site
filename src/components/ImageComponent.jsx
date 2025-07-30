const ImageComponent = () => {
  return (
    <div className="w-full h-[25vh] overflow-hidden shadow-xl">
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1605144156683-5ebde77feed5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Scenic view"
        className="w-full object-cover object-top"
      />
    </div>
  );
}

export default ImageComponent;
