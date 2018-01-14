g_citiz = new G_citizen();
g_road = new G_road();
city = new City(30,30);

city.generateCity(g_citiz,g_road);

console.log(city.toString());
