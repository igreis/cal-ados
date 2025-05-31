"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag } from "lucide-react"

interface Data {
  marca: string
  imageUrl: string
  preço: number
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  product: Data
}

export default function ProductModal({ isOpen, onClose, product }: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 p-1 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Product image */}
            <div className="relative w-full h-[280px]">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.marca}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product details */}
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900">{product.marca}</h2>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                R$ {product.preço.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex gap-3">
                <a href="https://wa.me/553432426156" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  <ShoppingBag size={18} />
                  Comprar agora
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

