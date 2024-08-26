import Image from "next/image";

import Avatar from "@/assets/Avatar.png";
import QuoteIcon from "@/assets/QuoteIcon.png";

function CustomerPost({ display = "flex" }) {
  return (
    <div
      className={`${display} mx-8 flex-col gap-4 rounded-sm border border-gray-400 px-4 py-6 lg:mx-0 lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:border-orange`}
    >
      <Image src={QuoteIcon} alt="Quote icon" />
      <h3 className="font-semibold">
        Sie haben unser Google-Ranking verbessert und den Traffic auf unserer
        Website erhöht
      </h3>
      <p className="text-xs leading-relaxed text-gray-600">
        Diese kleine und abwechslungsreiche Auswahl an Aktivitäten gibt Ihnen
        einen ersten Eindruck wie kreativ und flexibel VR AR MR -Anwendungen
        sind und in der Folge echte Vorteile bieten. Sie können diese Vorteile
        für Ihre digitale Arbeitsumgebung nutzen.
      </p>

      <div className="flex items-center gap-4">
        <div>
          <Image src={Avatar} alt="Avatar" />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Stephan Winzer</h3>
          <p className="text-xs text-gray-600">Swapp GmbH</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerPost;
