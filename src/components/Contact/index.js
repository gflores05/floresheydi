import React from 'react';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

import './style.scss';

const Contact = (props) => {
	const { register, handleSubmit, reset, errors } = useForm();
	const onSubmit = data => {
		props.onSendContact(data);
		reset();
	};
	return (
		<section>
			<h2>Get in touch</h2>
			{props.message &&
			<Alert variant={props.success ? 'success' : 'danger'}>
				{props.message}
			</Alert>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="fields">
					<div className="field half">
						<input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              ref={register({ required: true })}/>
            {errors.name &&
              <span className="text-danger">Este campo es requerido</span>}
					</div>
          <div className="field half">
						<input
              type="tel"
              name="phone"
              id="phone"
              ref={register({ required: true })}
              placeholder="Teléfono" />
              {errors.phone &&
              <span className="text-danger">Este campo es requerido</span>}
					</div>
					<div className="field">
						<input
              type="email"
              name="email"
              id="email"
              ref={register}
              placeholder="Correo Electrónico" />
					</div>
					<div className="field">
						<textarea
              name="message"
              id="message"
              ref={register}
              placeholder="Mensaje"></textarea>
					</div>
				</div>
				<ul className="actions">
					<li><input type="submit" value="Send" className="primary" /></li>
				</ul>
			</form>
		</section>
	);
}

export default Contact;