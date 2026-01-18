function getChai(kind : string | number)
{
    if(typeof kind === 'string')
    {
        // Here data type of kind is always string so
        // recommandation comes of string after .(dot)
        // operator this called type narrowing
        return `Making ${kind} chai...`
    }
    // here data type is number
    return `chil order ${kind}`
}

function notification(message ?: string)
{
    if(message)
    {
        console.log(`You got ${message} from TS`);
    }
}

notification("Hello");

class KulhadChai{
    serve(){
        return `serving kulhad chai...`;
    }
}
class Cutting{
    serve(){
        return `serving cutting chai...`;
    }
}

function serve(chai : KulhadChai | Cutting)
{
    if(chai instanceof KulhadChai)
    {
        return chai.serve();
    }
    else 
    {
        return chai.serve();
    }
}

