import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section>
                <h2>Get in touch</h2>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div class="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="field">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send" class="primary" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default Contact;