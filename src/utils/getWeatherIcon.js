export function getWeatherIcon(value) {
  switch (value) {
    case 0: {
      return "/images/icon-sunny.webp";
    }
    case (1, 2): {
      return "/images/icon-partly-cloudy.webp";
    }
    case 3: {
      return "/images/icon-overcast.webp";
    }
    case 48: {
      return "/images/icon-fog.webp";
    }
    case 55: {
      return "/images/icon-drizzle.webp";
    }
    case 65:
    case 80: {
      return "/images/icon-rain.webp";
    }
    case 75: {
      return "/images/icon-snow.webp";
    }
    case 95:
    case 96: {
      return "/images/icon-storm.webp";
    }
    default:
      return "N/A";
  }
}
