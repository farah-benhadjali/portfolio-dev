import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Link } from 'react-scroll'

const navLinks = [
  { to: 'about', label: 'À Propos' },
  { to: 'skills', label: 'Compétences' },
  { to: 'experience', label: 'Expérience' },
  { to: 'projects', label: 'Projets' },
  { to: 'formation', label: 'Formation' },
  { to: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-12 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">

            <div className="flex items-center gap-2">

              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#020617] font-bold font-mono text-xs"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #22D3EE)'
                }}
              >
                FB
              </div>

              <span className="font-bold text-[#E0E7FF]">
                Ben Hadj Ali Farah
              </span>

            </div>

            <p className="text-xs text-[#A5B4FC] font-mono">
              Ingénieure Full Stack JS & Microsoft Dynamics 365
            </p>

          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">

            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-64}
                className="text-xs text-[#A5B4FC] hover:text-[#22D3EE] transition-colors font-mono"
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/farah-benhadjali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-[#A5B4FC] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 transition-all"
            >
              <Icon icon="mdi:github" width={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/farah-ben-hadj-ali-a580011a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-[#A5B4FC] hover:text-[#6366F1] transition-all"
            >
              <Icon icon="mdi:linkedin" width={16} />
            </a>

            <a
              href="mailto:farah.bhadjali@gmail.com"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-[#A5B4FC] hover:text-[#A78BFA] transition-all"
            >
              <Icon icon="mdi:email" width={16} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-[#A5B4FC] font-mono">
            © {year} Farah Ben Hadj Ali. Tous droits réservés.
          </p>

          <p className="text-xs text-[#A5B4FC] font-mono flex items-center gap-1">
            Réalisé avec{' '}
            <span className="text-[#22D3EE]">React</span> +{' '}
            <span className="text-[#6366F1]">Framer Motion</span>
          </p>

        </div>

      </div>

    </footer>
  )
}