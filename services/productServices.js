const products = [
  {
    id: "1",
    name: "Starlux LED-Außenwandleuchte Umea",
    description:
      "Die LED-Außenwandleuchte UMEA von Starlux überzeugt durch ihr elegantes, modernes Design. Die anthrazitfarbene Oberfläche passt zu vielen Fassaden, Architekturstilen und Umgebungen. Das Highlight der Außenleuchte ist der individuell, durch flexible Metall-Lamellen, einstellbare Lichtstrahl. Dadurch erzeugt die Wandleuchte eine besonders effektvolle Beleuchtung nach oben und unten an einer Hausfront. Die eingebauten LED bringen nicht nur Licht ins Dunkle, sondern bieten gleichzeitig eine effiziente Energiesparmöglichkeit.",
    price: 24.95,
    category: "Außenwandleuchten",
  },
  {
    id: "2",
    name: "Starlux LED-Außenwandleuchte Umea XXL",
    description:
      "Die LED-Außenwandleuchte UMEA XXL von Starlux überzeugt durch ihr elegantes, modernes Design. Die anthrazitfarbene Oberfläche passt zu vielen Fassaden, Architekturstilen und Umgebungen. Das Highlight der Außenleuchte ist der individuell, durch flexible Metall-Lamellen, einstellbarer Lichtstrahl. Dadurch erzeugt die Wandleuchte eine besonders effektvolle Beleuchtung nach oben und unten an einer Hausfront. Die eingebauten LED bringen nicht nur Licht ins Dunkle sondern bieten gleichzeitig eine effiziente Energiesparmöglichkeit.",
    price: "44-",
    category: "Außenwandleuchten",
  },
  {
    id: "3",
    name: "Steinel LED-Außenwandleuchte L 810 S ANT",
    description:
      "Sie sehen ihn nicht. Er sieht sie. Ein hochwertiges Produkt ist durchdacht und mit besonderer Sorgfalt aus langlebigen Materialien hergestellt. Außerdem besteht sein Wert über den Tag hinaus, es ist von Dauer und Beständigkeit. Die Sensor Außenleuchte L 810 S als LED Up- und Downlight ist intelligente Technologie übersetzt in Form und Funktion. Erstmals ist es uns gelungen, den Sensor einer Leuchte vollkommen unsichtbar zu machen – ohne dabei auf erstklassiges Design und perfekte Technik zu verzichten. Zur effektvollen Beleuchtung nach oben und unten.",
    price: 129.95,
    category: "Außenwandleuchten",
  },
];

export async function getAllProducts() {
  return products;
}

export async function getProductById(id) {
  return products.find((product) => product.id === id);
}
