export default function Home() {
  return (
    <>

      <main>
        <div className='birthday-gift'>
          <div className='gift'>
            <input id='click' type='checkbox' />
            <label className='click' htmlFor='click'></label>
            <div className='wishes'>
              <span style={{ fontWeight: '600' }}>Happy Birthday Buraot!</span>
              <span>haha...</span>
              <br />
              <img
                src='/lhia.jpg'
                width='120px'
                className='lhia-img'
                style={{ marginTop: '20px' }}
              />
            </div>
            <div className='sparkles'>
              <div className='spark1'></div>
              <div className='spark2'></div>
              <div className='spark3'></div>
              <div className='spark4'></div>
              <div className='spark5'></div>
              <div className='spark6'></div>
            </div>
          </div>
        </div>
      </main>

      <p style={{position: 'absolute', marginTop: '320px'}}>clik mo yung lid ng gift. yw poe</p>

    </>
  );
}
