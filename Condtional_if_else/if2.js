const dayName=(day)=>
{
    let dayy;
switch (day){
    case 1:
        dayy= 'Sunday';
        break;
    case 2:
        dayy= 'Monday';
        break;
    case 3:
        dayy= 'Tuesday';
        break;
    case 4:
        dayy= 'Wednesday';
        break;
    case 5:
        dayy= 'Thursday';
        break;
    case 6:
        dayy= 'Friday';
        break;
    case 7:
        dayy= 'Saturday';
        break;
    default:
        dayy= 'Invalid day';
        }

        return dayy;
    }

    console.log(dayName(5));