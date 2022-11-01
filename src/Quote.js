
export default function Quote(props) {
    return(
      <div id='quote-box'>
        <p id='text'><i className="fa fa-quote-left" aria-hidden="true"></i> {props.quote} <i className="fa fa-quote-right" aria-hidden="true"></i></p>
        <span id='author'>-{props.author}</span>
        <div className='buttons-container'>
          <div className='socialMedia'>
            <button>
              <a id='tweet-quote' href={`https://twitter.com/intent/tweet`} target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              </button>
            <button>
              <a href={`https://www.tumblr.com`} target="_blank">
                <i className="fa fa-tumblr tumblr" aria-hidden="true"></i>
              </a>
            </button>
          </div>
          <button id='new-quote' onClick={props.fetchData}>New quote</button>
        </div>
      </div>
    )
}