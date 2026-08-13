import React, { useState, useEffect } from 'react'
import { Img, Line } from "../components";
import axios from 'axios';
import { client } from '../utils/sanityClient';
import { Typography } from '../components/Text/index';

const Contact = () => {

  const [postData, setPostData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitForm = async (e) => {
    if (postData.name === '' || postData.email === '' || postData.message === '') {
      setMessage('Please fill all the fields.');
      return;
    }
    console.log(e.target);
    e.preventDefault();
    try {

      const res = await axios.post('https://eoahnoskapd5jrd.m.pipedream.net', postData);
      console.log(res);
      if (res.status === 200) {
        setMessage('Message sent successfully.');
        setPostData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.log(error);
      setMessage('Failed to send message, Try sending again!');
    }
  }

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "summary"][0]`)
      .then((data) => {
        console.log(data);
        setSummary(data)
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray_900_02 flex flex-col items-start justify-center mt-0.5 pl-[60px] mx-auto md:px-5 py-[50px]" id='contact'>
      <div className="flex flex-col gap-[55px] justify-start mt-[9px]">
        <div className="flex flex-col gap-[25px] items-start justify-start ml-2 md:ml-[0]">
          <Typography
            className="font-semibold text-green_A200"
            as="h4"
            variant="h4"
          >
            Want to Connect with Me?
          </Typography>
          <Typography
            className="font-medium text-white_A700"
            as="h6"
            variant="h6"
          >
            You can contact me through following!!
          </Typography>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 w-[90vw] justify-between">
          <div className="flex flex-col md:mt-0 mt-[23px] pb-[9px] px-[9px] w-full">
            <div className="flex flex-col mb-1.5">
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start">
                <Img
                  src="images/img_email.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="email"
                />
                <Typography
                  className="font-medium text-white_A700"
                  as="a"
                  href={`mailto:${summary?.email}`}
                  variant="h6"
                >
                  {summary?.email}
                </Typography>
              </div>
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mt-4">
                <Img
                  src="images/img_visit.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="visit"
                />
                <Typography
                  className="sm:flex-1 font-medium text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  {summary?.currentLocation}
                </Typography>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-[29px]">
                <Img
                  src="images/img_linkedin.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="linkedin"
                />
                <Typography
                  className="font-medium text-white_A700"
                  as="a"
                  href={summary?.linkedIn}
                  variant="h6"
                >
                  {summary?.linkedIn}
                </Typography>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4">
                <Img
                  src="images/img_twitter.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="twitter"
                />
                <Typography
                  className="font-medium text-white_A700"
                  as="a"
                  href={summary?.twitter}
                  variant="h6"
                >
                  {summary?.twitter}
                </Typography>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4">
                <Img
                  src="images/img_github.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="github"
                />
                <Typography
                  className="font-medium text-white_A700"
                  as="a"
                  href={summary?.gitHub}
                  variant="h6"
                >
                  {summary?.gitHub}
                </Typography>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-4 w-3/5 md">
                <Img
                  src="images/img_youtube.png"
                  className="h-[60px] md:h-10 object-cover"
                  alt="youtube"
                />
                <Typography
                  className="font-medium text-white_A700"
                  as="a"
                  variant="h6"
                  href={summary?.youTube}
                >
                  {summary?.youTube}
                </Typography>
              </div>
            </div>
          </div>
          <Line className="bg-green_A200_dd h-[450px] w-0.5 md:mt-0 my-2 mx-4 md:h-[3px]" />
          <form className="flex flex-col gap-5 mb-[7px] p-5 w-full" method="POST" onSubmit={handleSubmitForm}>
            <input
              className="bg-blue_gray_900_01 p-4 mr-4 my-1 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Name' type='text' required name='name' value={postData.name} onChange={handleChange}
            >
            </input>
            <input
              className="bg-blue_gray_900_01 p-4 mr-4 my-1 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Email' type='email' required name='email' value={postData.email} onChange={handleChange}
            ></input>
            <textarea
              className="bg-blue_gray_900_01 p-4 mr-4 my-1 w-[100%] text-[20px] rounded-[10px] text-gray_500"
              placeholder='Message' type='text' required rows={5} name='message' value={postData.message} onChange={handleChange}
            ></textarea>
            <input
              className="cursor-pointer text-xl text-center px-8 py-4 w-[100%] text-green_A200 hover:bg-gradient-to-r from-cyan-500 to-green-300 hover:text-black transition-[background-color] delay-150 rounded-[20px] bg-blue_gray_900"
              type='submit'
              placeholder='Submit'
              onClick={handleSubmitForm}
            >
            </input>
            <p className="text-white_A700 text-center text-lg">{message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact