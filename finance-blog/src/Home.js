import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={{display: 'flex',flexDirection: 'column',flexWrap: 'wrap',alignItems: 'center'}}>
          <img src="headshot.jpg" alt="" style={{ height:'40%',width:'40%'}}/>
      </div>
      <p>
        Thank you for visiting my site. Here, we talk all things personal finance. My name is Navin, and I am passionate about helping others reach their personal finance goals.
        I firmly believe that financial freedom can be achieved through the implementation of simple principles. It requires work, dedication, and sacrifice, but is absolutely attainable.
      </p>
      <p>
        In this blog, I will attempt to walk through various strategies, from budgeting to investing and everything in between. Half the battle is mental - overcoming mental hurdles,
        gaining new knowledge that can empower you to take control of your finances - these are the building blocks of sound personal finance.
      </p>
      <p>
        I have no formal financial education - I am completely self-taught. I believe in everything that I write here, not just because it makes sense to me, but because I live it.
        I implement these strategies in my own life, and it has brought about a degree of financial peace I never thought was possible.
      </p>
      <p>
        Especially in these current times of high inflation and high cost of living, along with wages not keeping up with either of those, there is no more important time to make every dollar
        count. We will discuss how to make your life inflation-proof, how to live within (and below!) your means, and strategies for saving money.
      </p>
      <p>
        Visit the Blog section of the website to learn more. If you would like to connect, feel free to fill out the form in the Contact section and I will get back 
        to you as soon as possible.
      </p>
    </div>
  );
}

export default Home;