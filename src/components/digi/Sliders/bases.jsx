import Link from "next/link";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";

export function CustomCarousel({ Item, data, breakPoints, style }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoaded(true);
    }
  }, [data]);

  return (
    <>
      {!loaded && <SkeletonCarousel />}
      {loaded && (
        <Carousel breakPoints={breakPoints} isRTL={true} pagination={false}>
          {data.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className={style}
            >
              <Item product={product} />
            </Link>
          ))}
        </Carousel>
      )}
    </>
  );
}

function SkeletonCarousel() {
  return (
    <div>
      {/* Render your skeleton UI here */}
      <p>Loading...</p>
    </div>
  );
}
