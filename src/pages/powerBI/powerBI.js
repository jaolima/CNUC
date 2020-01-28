import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function powerBI() {
  return (
    <>
      <Header />
      <iframe
        width="auto"
        height="2924px"
        title="Power BI"
        src="https://app.powerbi.com/view?r=eyJrIjoiMDNmZTA5Y2ItNmFkMy00Njk2LWI4YjYtZDJlNzFkOGM5NWQ4IiwidCI6IjJiMjY2ZmE5LTNmOTMtNGJiMS05ODMwLTYzNDY3NTJmMDNlNCIsImMiOjF9"
        style={{ width: '100%' }}
      />
      <Footer />
    </>
  );
}
