import { ChevronLeft, Camera } from 'lucide-react'
import Link from 'next/link'

export default function Forms() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href={'/'}
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" /> Voltar para Pagina Inicial
      </Link>
      <form className="flex  flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar Mídia
          </label>
          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-1.5  text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Tornar Memória Publica
          </label>
        </div>
        <input type="file" id="media" className="invisible"></input>
        <textarea
          name="content"
          spellCheck={false}
          className="border-1 h-full w-full resize-none rounded bg-transparent text-lg leading-relaxed text-gray-100 placeholder:text-gray-400"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        ></textarea>
      </form>
    </div>
  )
}
