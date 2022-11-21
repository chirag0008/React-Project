import React, { useState } from 'react'

const Hollywood = () => {
  const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[website,setWebsite]=useState("");
    const[comment,setComment]=useState("");

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name is: ${name}`+"\n"+`Email is: ${email}`+"\n"+`Website is: ${website}`+"\n"+`Comment is: ${comment}`)
    }
  return (
    <div>
        <div>
        <h1 className='hd5'>Harry Styles’ Girlfriend: Who The Star Is Dating Now, Plus His Full Relationship Timeline</h1>
        <p className='p5'>Harry Styles' controversial nearly two-year relationship with Olivia Wilde has reportedly ended. 
            Look back at the relationships he's enjoyed since he rose to fame in 2010.</p>
            <p className='p5'>By: Erin Silvia<br></br>
            November 18, 2022 7:11PM EST</p>
            <img className='im2' src='https://hollywoodlife.com/wp-content/uploads/2021/01/harry-styles-girlfriend-post-ftr.jpg?resize=768%2C432'></img>
            <img></img>
            <p className='p5'>Harry Styles has been making girls swoon with his handsome looks, irresistible charm, and musical talent ever since he stepped onto 
                The X Factor stage for a televised audition of Stevie Wonder‘s “Isn’t She Lovely” in 2010. So, it’s no wonder he’s led a steady romantic life over the years. 
                Although the contestant-turned-superstar has many admirers from all over the world, only a few ladies have been lucky enough to be a part of his love life since
                 he broke onto the music scene with his band One Direction and later started a successful solo career. 
                From the late English television presenter, Caroline Flack, to his most recent ex, actress and director Olivia Wilde, 
                we’re taking a look at all of the gals who’ve been romantically linked to the British superstar.</p>
                <h1 className='hd5'>Harry Is Currently Dating Olivia Wilde</h1>
                <img className='im2' src='https://hollywoodlife.com/wp-content/uploads/2021/01/harry-styles-romantic-history-Olivia-Wilde-13.jpg'></img>
                <p className='pp'>Harry Styles is seen visiting Olivia Wilde’s trailer on the set of her film ‘Don’t Worry, Darling’ in Nov. 2020. <br></br>
                They were spotted holding hands at a wedding two months later. (Backgrid)</p>
                <p className='p5'>Harry’s last love interest was actress and director Olivia Wilde, who he sparked a romance with after he was hired to star in her 2022 film, Don’t Worry, Darling. 
                Their relationship caused some controversy, as the timeline of Olivia’s split from her fiancé of seven years, Jason Sudeikis, in late 2020 and the start of her relationship with Harry is a bit blurry. 
                Olivia and Harry were first seen holding hands at Harry’s agent’s wedding on Jan. 3, 2021, and were photographed with luggage at his Los Angeles home the next day.

        Over the next 19 months, they were seen cruising around Europe together, kissing in the streets of New York City, and hitting the gym together. 
        Olivia was also spotted several times backstage at Harry’s Love on Tour shows in the fall of 2022.</p><br></br>
    <hr></hr>
    <h1 className='hd5'>Elizabeth Holmes Sentenced To 11 Years & 3 Months In Prison On Fraud Charges</h1>
    <div>
    <img className='imk' src='https://hollywoodlife.com/wp-content/uploads/2022/11/elizabeth-holmes-being-sentenced-ss-ftr.jpg?resize=768%2C432'></img>
    <img className='imp' src='https://assets.entrepreneur.com/content/3x2/2000/1593193401-fairandlovelyedited.jpg'></img>
    </div>
    <div className='div34'>
    <p className='p5'><span className='sp1'>Elizabeth Holmes</span> was sentenced to a 11-year and three month long prison sentence after being convicted on fraud charges, on Friday, November 18. 
        The <span className='sp1'>former tech entrepreneur</span>, 38, was also fined $250, 000 and ordered to pay restitution on each of her four charges of defrauding investors.
         Her sentence will be followed by three years of supervised release, per Variety, who also reported the sentence. As for turning herself in, she is expected to self-surrender at a later date.
         The sentencing by Judge Edward Davila took place after a hearing that lasted four hours.</p>
         <p className='p5'>
         Prior to her conviction, Elizabeth was found guilty back in January. She faced up to 20 years in prison for charges of defrauding investors. 
         Lawyers for the government had requested that she be sentenced to 15 years in prison, as well as probation and restitution, while her lawyers had requested 
         that she only be sentenced to 18 months with probation and community service, per<span className='sp1'> CNN</span>.
          Prosecutors requested that she be ordered to pay $804 million in restitution to George P. Shultz, who died in February 2021, and the companies Walgreens and Safeway, according to<span className='sp1'> The New York Times</span>. 
        <br></br>
        Elizabeth founded Theranos when she was a teen in 2003. She garnered much interest when she claimed that she had invented new technology, which could test blood with very few drops. 
        She came under fire when journalists investigated the company and found that the technology wasn’t as reliable as she’d claimed, leading to investors to pursue fraud charges.
         </p>
         <p className='p5'>Prior to her sentencing, about 130 people wrote letters that were submitted by Elizabeth’s legal team to 
            Judge <b>Edward J. Davila</b> to ask for leniency in Elizabeth’s sentence, including Senator Cory Booker, 
            who explained that he’d met the entrepreneur at a dinner event. “I firmly believe in the possibility of rehabilitation
             and in the power of redemption for anyone,” he wrote, according to the <span className='sp1'>Law And Crime network</span>. “I believe that Ms. Holmes 
             has within her a sincere desire to help others, 
            to be of meaningful service, and possesses the capacity to redeem herself.”</p>
            <p className='p5'>The Theranos downfall became a point of interest in a number of different pieces of media. An HBO documentary chronicling the company’s downfall was released in 2019 called The Inventor: Out For Blood In Silicon Valley.
                 A podcast called The Dropout inspired a Hulu series of the same name, which starred <b>Amanda Seyfried</b> as the Theranos founder. Amanda won a Primetime Emmy award for her portrayal of Elizabeth at the 2022 award show. 
                The series was nominated for a total of six Emmys, including Outstanding Limited or Anthology Series.</p>
         </div>

        </div>
        <div className='div32'>
<h1 className='hd9'>Leave a Comment</h1>

<form className='formm' onSubmit={onHandleSubmit}>
    <label className='lb1' required >NAME*</label><br></br>
    <input type="text" className='in1' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
    <br></br>
    <label className='lb1' required>EMAIL*</label><br></br>
    <input type="email" className='in1' placeholder='abc@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <br></br>
    <label className='lb1' required>WEBSITE*</label><br></br>
    <input type="email" className='in1' placeholder='enter your website' value={website} onChange={(e)=>setWebsite(e.target.value)}></input>
    <label className='lb1'>COMMENT*</label>
    <br></br><br></br>
    <textarea className='txta' rows="5" cols="48" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
    <button className='btn' type='submit'>Submit</button>
</form>
</div>
        

    </div>
  )
}

export default Hollywood;