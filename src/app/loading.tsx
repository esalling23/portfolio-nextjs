'use server'
import PixelLoader from "@/components/shared/Pixels/PixelLoader";

function Loading() {
  // const [displayContent, setDisplayContent] = useState(false);
  // const [loadingAnimComplete, setLoadingAnimComplete] = useState(false);
  return <PixelLoader
    isLoading={true}
    // handleAnimComplete={() => setLoadingAnimComplete(true)}
    // handleAnimExited={() => setDisplayContent(true)}
    key="pixel-loader"
  />
}

export default Loading