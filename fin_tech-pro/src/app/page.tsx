import Link from "@/components/ui/Link"
import Button from "@/components/ui/Button"
export default function Page() {
    return(
        <div>
            <h1>Page</h1>
            <p>Page content</p>
            <div className="p-4 space-y-4 flex flex-col justify-center items-center">
      <div className="space-x-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
      
      <div className="space-x-2">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      
      <div className="flex flex-col space-y-2">
        <Link href="#">Default Link</Link>
        <Link href="#" variant="subtle">Subtle Link</Link>
        <Link href="#" variant="button" >Button Link</Link>
      </div>
    </div>
        </div>
    )
}