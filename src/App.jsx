import JohnDeweyAltura from "./assets/JohnDeweyAltura.png";
import WebDesign from "./assets/WebDesign.png";

function BrandGuidelines() {
  return (
    <div
      className='w-screen h-screen bg-gradient-to-b from-primaryBgColor to-secondaryBgColor
      flex items-center justify-evenly'
    >
      <img src={WebDesign} className='absolute left-12 top-12' />
      <img src={JohnDeweyAltura} className='absolute top-2/3 left-12' />
      <h1 className='text-primaryTextColor text-6xl font-PublicSans font-bold tracking-wide'>
        Brand
        <br />
        Guidelines
        <div className='w-96 h-1 bg-white mt-4 rounded-full bg-gradient-to-l from-gradientBlue to-gradientRed' />
      </h1>
      <p className='text-primaryTextColor text-md text-opacity-60 font-Inter tracking-wide'>
        Lorem Ipsum is simply dummy
        <br /> text of the printing and
        <br /> typesetting industry.
      </p>
    </div>
  );
}

function Typography() {
  const Salec = () => {
    return (
      <div
        className='flex-1 bg-[#e2e2e2] flex flex-col justify-between p-12
            font-PublicSans tracking-wide text-[#202020]'
      >
        <div className='flex justify-between'>
          <h3 className='text-lg font-bold'>Salec</h3>
          <p className='w-72'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <p className='opacity-60'>Lorem ipsum</p>
          <p>Lorem ipsum is simply dummy text</p>
        </div>
      </div>
    );
  };

  const IBMFlexMono = () => {
    return (
      <div
        className='flex-1 bg-[#3a3a3a] flex flex-col justify-between p-12
            font-PublicSans tracking-wide text-[#e2e2e2]'
      >
        <div className='flex justify-between'>
          <h3 className='text-lg font-bold'>IBM Flex Mono</h3>
          <p className='w-72'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <p className='opacity-60'>Lorem ipsum</p>
          <p>Lorem ipsum is simply dummy text</p>
        </div>
      </div>
    );
  };

  return (
    <div className='w-screen h-screen bg-secondaryBgColor'>
      <div className='w-full h-full absolute flex'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h3 className='w-80 text-primaryTextColor text-3xl font-PublicSans font-bold tracking-wide'>
            Typo
            <br />
            graphy
          </h3>
          <p className='w-80 mt-4 text-primaryTextColor text-opacity-60 text-sm font-Inter tracking-wide'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div className='flex-1 flex flex-col'>
          <Salec />
          <IBMFlexMono />
        </div>
      </div>
      <img src={WebDesign} className='relative left-12 top-12' />
      <img src={JohnDeweyAltura} className='relative top-2/3 left-12' />
    </div>
  );
}

function ColorPallete() {
  const PrimaryGradient = () => {
    return (
      <div
        className='flex-1 bg-gradient-to-l from-gradientBlue to-gradientRed flex 
        flex-col justify-between font-PublicSans text-primaryTextColor'
      >
        <h3 className='text-lg font-semibold pt-12 pl-12'>Primary Gradient</h3>
        <div className='flex justify-between'>
          <p className='pb-12 pl-12'>Lorem ipsum is simply</p>
          <p className='pb-12 pr-24'>Lorem ipsum</p>
        </div>
      </div>
    );
  };

  const FourColors = () => {
    return (
      <div className='grid grid-cols-2 flex-1 font-PublicSans font-bold tracking-wide'>
        <div className='p-12 bg-primaryBgColor text-primaryTextColor'>
          Black
          <p className='text-sm font-normal mt-4 opacity-60'>#000000</p>
        </div>
        <div className='p-12 bg-primaryTextColor text-primaryBgColor'>
          White
          <p className='text-sm font-normal mt-4 opacity-60'>#FFFFFF</p>
        </div>
        <div className='p-12 bg-[#3A3A3A] text-[#DCDCDC]'>
          Grey
          <p className='text-sm font-normal mt-4 opacity-60'>#DCDCDC</p>
        </div>
        <div className='p-12 bg-[#DCDCDC] text-[#3a3a3a]'>
          Silver
          <p className='text-sm font-normal mt-4 opacity-60'>#3A3A3A</p>
        </div>
      </div>
    );
  };

  return (
    <div className='w-screen h-screen bg-secondaryBgColor'>
      <div className='w-full h-full absolute flex'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h3 className='w-80 text-primaryTextColor text-3xl font-PublicSans font-bold tracking-wide'>
            Color
            <br />
            Pallete
          </h3>
          <p className='w-80 mt-4 text-primaryTextColor text-opacity-60 text-sm font-Inter tracking-wide'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div className='flex-1 flex flex-col'>
          <PrimaryGradient />
          <FourColors />
        </div>
      </div>
      <img src={WebDesign} className='relative left-12 top-12' />
      <img src={JohnDeweyAltura} className='relative top-2/3 left-12' />
    </div>
  );
}

function App() {
  return (
    <div>
      <BrandGuidelines />
      <Typography />
      <ColorPallete />
    </div>
  );
}

export default App;
