'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css';
import About from './components/About';
import Skill from './components/Skill';
import EducationExperience from './components/EducationExperience';
import Certificate from './components/Certificate';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from "react-typed";
const navigation = [
  { name: 'about me', href: '#about' },
  { name: 'skills', href: '#skill' },
  { name: 'education & experience', href: '#summary' },
  { name: 'certificate & training', href: '#certificate' },
  { name: 'personal portfolio', href: '#personal-portfolio' },
  { name: 'portfolio', href: '#portfolio' },
  { name: 'contact me', href: '#contact' },
]

const interests = [
  "Information Technology", "Programming", "Web development", "Backend development"
];
export default function App() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const appName = "Miftahul Ulum"
  const contact = {
    phone: "085233551629",
    city: "Malang, East Java, Indonesia",
    degree: "bachelor",
    email: "ulumiftahul06@gmail.com",
    freelance: "Available",
    interest: "Information Technology"
  }
  const [certificates, setCertificates] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [personalPortfolios, setPersonalPortfolios] = useState([]);
  useEffect(() => {
    fetch('./json/certificates.json')
      .then(response => response.json())
      .then(data => setCertificates(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  useEffect(() => {
    fetch('./json/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);
  useEffect(() => {
    fetch('./json/educations.json')
      .then(response => response.json())
      .then(data => setEducations(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);
  useEffect(() => {
    fetch('./json/experiences.json')
      .then(response => response.json())
      .then(data => setExperiences(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);
  useEffect(() => {
    fetch('./json/portfolios.json')
      .then(response => response.json())
      .then(data => setPortfolios(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);
  useEffect(() => {
    fetch('./json/personal_portfolios.json')
      .then(response => response.json())
      .then(data => setPersonalPortfolios(data.data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <>
      <div className="bg-white">
        <header className={`header ${isScrolled ? 'transparent' : ''}`}>
          {/* <header className="absolute inset-x-0 top-0 z-50"> */}
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5 font-bold text-xl">
                <span className="sr-only">{appName}</span>
                {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
                {appName}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="menu text-sm/6 font-semibold text-gray-900">
                  {t(`${item.name}`)}
                </a>
              ))}

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5 font-bold">
                  <span className="sr-only">{appName}</span>
                  {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
                  {appName}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#341d50] to-[#1004bf] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                My name is <span className="font-bold">{appName}</span>.{' '}
                {/* <a href="#about" className="font-semibold text-primary">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a> */}
              </div>
            </div>
            <div className="text-center">
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                I'm interest with
              </p>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                <ReactTyped
                  strings={interests}
                  typeSpeed={100}
                  backSpeed={70}
                  attr="placeholder"
                  loop
                >
                  <input type="text" className="text-center bg-transparent focus:border-0 focus:border-transparent" />
                </ReactTyped>
              </h1>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <div id="about">
          <About contact={contact} />
        </div>
        <div id="skill">
          <Skill skills={skills} />
        </div>
        <div id="summary">
          <EducationExperience educations={educations} experiences={experiences} />
        </div>
        <div id="certificate">
          <Certificate certificates={certificates} />
        </div>
        <div id="personal-portfolio">
          <Portfolio portfolios={personalPortfolios} title={t('personal portfolio')} />
        </div>
        <div id="portfolio">
          <Portfolio portfolios={portfolios} title={t('portfolio')} />
        </div>
      </div>
      <Footer appname={appName} />
      <a
        href="#header"
        className="fixed hidden justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
        id="to-top"
      >
        <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>

      <BackToTop />
    </>

  )
}
