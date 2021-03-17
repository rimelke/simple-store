import NextImage from 'next/image'

interface Props {
    ratio: number
    src: string
	className?: string
}

const CoverImage: React.FC<Props> = ({ ratio, src, className }) => (
    <div className="flex-1">
        <NextImage className={className + " object-cover"} src={src} width={1000 * ratio} height={1000} layout="responsive" />
    </div>
)

export default CoverImage
