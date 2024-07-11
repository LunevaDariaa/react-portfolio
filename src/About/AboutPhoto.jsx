//  src=".././public/img/my_photo.JPG"
function AboutPhoto() {
  return (
    <div className="relative flex items-center justify-center p-6">
      <div className="absolute top-0 z-0 w-20 h-20 left-9 bg-dots"></div>
      <div className="absolute bottom-0 z-0 w-20 h-20 right-9 bg-dots"></div>
      <img
        src=".././public/img/my_photo.JPG"
        alt="Daria Luneva"
        className="z-0 object-cover rounded-full w-80 h-80"
      />
    </div>
  );
}

export default AboutPhoto;
