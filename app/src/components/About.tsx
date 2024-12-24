'use client'
type Contact = {
    phone: string;
    city: string;
    degree: string;
    email: string;
    freelance: string;
    interest: string;
};

type AboutProps = {
    contact: Contact;
};
import { translate } from '../helpers/lang';
const About = ({ contact }: AboutProps) => {
    return (
        <div className="container w-full text-base my-10">
            <h2 className="section-title">Tentang Saya</h2>
            <p className="mb-3 text-center">My name is <span className="font-bold">Miftahul Ulum</span> and you can call me <span className="font-bold">'Miftah'</span> or <span className="font-bold">'Ulum'</span>. I'm web developer from Indonesia, more precisely in the Malang City East Java.
            </p>
            <p className="mb-3 text-center">Nama saya <span className="font-bold">Miftahul Ulum</span> Anda bisa memanggil saya <span className="font-bold">'Miftah'</span> atau <span className="font-bold">'Ulum'</span>. Saya seorang web developer dari Malang Jawa Timur Indonesia</p>
            <div className="w-full mt-5">
                <div className="flex justify-center">
                    <div className="w-1/4 mr-10">
                        <img src="./miftahululum.jpeg" className="image-profile my-4 w-full" />
                    </div>
                    <div className="w-3/4 ml-4">
                        <h3 className="font-bold text-4xl">{translate('it_enthusiast')}</h3>
                        <p className="text-justify mb-4">
                            I'm familiar with web development. Development website with PHP language. Familiar with the laravel framework, CodeIgniter, NodeJS, ReactJS, VueJS, etc.
                        </p>
                        <p className="text-justify">
                            Saya familiar dengan pengembangan website dengan bahasa PHP. Saya familiar juga dengan framework Laravel, Codeigniter, NodeJS, ReactJS, VueJS dan lain-lain.
                        </p>
                        <ul className="list-disc mx-5">
                            <li><span className="font-bold">{translate('phone')}:</span> {contact.phone}</li>
                            <li><span className="font-bold">{translate('city')}:</span> {contact.city}</li>
                            <li><span className="font-bold">{translate('degree')}:</span> {translate(`${contact.degree}`)}</li>
                            <li><span className="font-bold">{translate('email')}:</span> {contact.email}</li>
                            <li><span className="font-bold">{translate('freelance')}:</span> {contact.freelance}</li>
                            <li><span className="font-bold">{translate('interest')}:</span> {contact.interest}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;