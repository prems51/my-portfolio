import { motion } from "framer-motion"
import { CERTIFICATIONS } from "../constants"
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa"

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group shadow-lg hover:shadow-purple-500/5 cursor-pointer"
            >
              <div>
                {/* PDF Document Icon Badge */}
                <div className="p-4 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-2xl w-fit mb-6 group-hover:bg-purple-600/10 group-hover:text-purple-300 group-hover:border-purple-500/30 transition-all duration-300 shadow-inner">
                  <FaFilePdf size={28} />
                </div>

                {/* Details */}
                <h3 className="font-semibold text-xl text-neutral-100 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-purple-200 mt-2 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs text-neutral-400 mt-1 italic">
                  {cert.date}
                </p>
              </div>

              {/* Skills Tags & Action Link */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-1.5 justify-start mb-6">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 text-xs font-medium text-pink-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-purple-400 group-hover:text-purple-300 font-medium text-sm transition-colors duration-300">
                  <span>View Certificate PDF</span>
                  <FaExternalLinkAlt size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications