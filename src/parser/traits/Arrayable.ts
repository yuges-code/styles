import Propertyable from "./Propertyable";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Arrayable<T extends Constructor>(base: T)
{
    return class extends (Propertyable(base))
    {
        toArray(options?: any)
        {
            const properties = this.properties();

            var array = {} as {
                [key in (typeof properties)[number]]: any
            }

            properties.forEach((property) => {
                if (typeof this[property]?.toArray === 'function') {
                    array[property] = this[property].toArray();
                } else {
                    array[property] = this[property];
                }
            });

            return array;
        };
    };
};
