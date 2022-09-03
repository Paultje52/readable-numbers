declare module "readable-numbers" {

  function readable(number: number, decimalPlaces?: number, formatThousand?: boolean): string;
  type formats = string[];
  function setFormats(formats: formats): void;
  
  export default readable;
  export {
    formats,
    setFormats
  };

};