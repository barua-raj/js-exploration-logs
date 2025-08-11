function totalWood (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWoodAmonut = chairTotalWood + tableTotalWood + perBedWood;

    return totalWoodAmonut;
}
const result = totalWood(1, 7, 3);
console.log(result);
