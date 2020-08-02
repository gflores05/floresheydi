import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section>
                <h2>Get in touch</h2>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send" className="primary" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default Contact;