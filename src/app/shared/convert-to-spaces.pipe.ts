import { Pipe , PipeTransform} from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpasesPipe implements PipeTransform {
    transform(value: string, character: string) : string {
        return value.replace(character, ' ');
    }
}