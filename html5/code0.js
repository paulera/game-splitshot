gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.repeatCount2 = 0;

gdjs.NewSceneCode.repeatIndex2 = 0;

gdjs.NewSceneCode.GDPlatformObjects1= [];
gdjs.NewSceneCode.GDPlatformObjects2= [];
gdjs.NewSceneCode.GDPlatformObjects3= [];
gdjs.NewSceneCode.GDPlatformObjects4= [];
gdjs.NewSceneCode.GDPlatformObjects5= [];
gdjs.NewSceneCode.GDBallObjects1= [];
gdjs.NewSceneCode.GDBallObjects2= [];
gdjs.NewSceneCode.GDBallObjects3= [];
gdjs.NewSceneCode.GDBallObjects4= [];
gdjs.NewSceneCode.GDBallObjects5= [];
gdjs.NewSceneCode.GDShot1Objects1= [];
gdjs.NewSceneCode.GDShot1Objects2= [];
gdjs.NewSceneCode.GDShot1Objects3= [];
gdjs.NewSceneCode.GDShot1Objects4= [];
gdjs.NewSceneCode.GDShot1Objects5= [];
gdjs.NewSceneCode.GDBulletYellowObjects1= [];
gdjs.NewSceneCode.GDBulletYellowObjects2= [];
gdjs.NewSceneCode.GDBulletYellowObjects3= [];
gdjs.NewSceneCode.GDBulletYellowObjects4= [];
gdjs.NewSceneCode.GDBulletYellowObjects5= [];
gdjs.NewSceneCode.GDYellowObjects1= [];
gdjs.NewSceneCode.GDYellowObjects2= [];
gdjs.NewSceneCode.GDYellowObjects3= [];
gdjs.NewSceneCode.GDYellowObjects4= [];
gdjs.NewSceneCode.GDYellowObjects5= [];
gdjs.NewSceneCode.GDLabelAmmoObjects1= [];
gdjs.NewSceneCode.GDLabelAmmoObjects2= [];
gdjs.NewSceneCode.GDLabelAmmoObjects3= [];
gdjs.NewSceneCode.GDLabelAmmoObjects4= [];
gdjs.NewSceneCode.GDLabelAmmoObjects5= [];
gdjs.NewSceneCode.GDInfoObjects1= [];
gdjs.NewSceneCode.GDInfoObjects2= [];
gdjs.NewSceneCode.GDInfoObjects3= [];
gdjs.NewSceneCode.GDInfoObjects4= [];
gdjs.NewSceneCode.GDInfoObjects5= [];
gdjs.NewSceneCode.GDShootingAreaObjects1= [];
gdjs.NewSceneCode.GDShootingAreaObjects2= [];
gdjs.NewSceneCode.GDShootingAreaObjects3= [];
gdjs.NewSceneCode.GDShootingAreaObjects4= [];
gdjs.NewSceneCode.GDShootingAreaObjects5= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition5IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition5IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.NewSceneCode.GDBallObjects2});gdjs.NewSceneCode.eventsList0x71bfdc = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x71bfdc
gdjs.NewSceneCode.eventsList0x7383ac = function(runtimeScene) {

{


gdjs.NewSceneCode.repeatCount2 = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
for(gdjs.NewSceneCode.repeatIndex2 = 0;gdjs.NewSceneCode.repeatIndex2 < gdjs.NewSceneCode.repeatCount2;++gdjs.NewSceneCode.repeatIndex2) {
gdjs.NewSceneCode.GDPlatformObjects2.createFrom(runtimeScene.getObjects("Platform"));
gdjs.NewSceneCode.GDBallObjects2.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects2Objects, (( gdjs.NewSceneCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects2[0].getWidth()) + gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.NewSceneCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects2[0].getWidth()) - (( gdjs.NewSceneCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects2[0].getWidth())), gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.NewSceneCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects2[0].getHeight())), "");
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x7383ac
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects = Hashtable.newFrom({"Yellow": gdjs.NewSceneCode.GDYellowObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects = Hashtable.newFrom({"BulletYellow": gdjs.NewSceneCode.GDBulletYellowObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.NewSceneCode.GDPlatformObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects = Hashtable.newFrom({"Yellow": gdjs.NewSceneCode.GDYellowObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects = Hashtable.newFrom({"BulletYellow": gdjs.NewSceneCode.GDBulletYellowObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.NewSceneCode.GDBallObjects3});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects3Objects = Hashtable.newFrom({"BulletYellow": gdjs.NewSceneCode.GDBulletYellowObjects3});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.NewSceneCode.GDBallObjects4});gdjs.NewSceneCode.eventsList0x737a4c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDBallObjects4.createFrom(gdjs.NewSceneCode.GDBallObjects3);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = ((( gdjs.NewSceneCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects4[0].getWidth()) > 20);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlatformObjects4.createFrom(runtimeScene.getObjects("Platform"));
/* Reuse gdjs.NewSceneCode.GDBallObjects4 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects4Objects, (( gdjs.NewSceneCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects4[0].getPointX("")), (( gdjs.NewSceneCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects4[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects4[i].setHeight(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects4[i].setWidth(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects4[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NewSceneCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects4[0].getWidth()) + gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.NewSceneCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects4[0].getWidth()) - (gdjs.NewSceneCode.GDBallObjects4[i].getWidth())), gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.NewSceneCode.GDBallObjects4[i].getHeight())));
}
}}

}


{

/* Reuse gdjs.NewSceneCode.GDBallObjects3 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = ((( gdjs.NewSceneCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects3[0].getWidth()) <= 20);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBallObjects3 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x737a4c
gdjs.NewSceneCode.eventsList0x6be464 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDBallObjects3.createFrom(gdjs.NewSceneCode.GDBallObjects2);

gdjs.NewSceneCode.GDBulletYellowObjects3.createFrom(runtimeScene.getObjects("BulletYellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects3Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects3Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBulletYellowObjects3.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBulletYellowObjects3[i].getAverageForce().getLength() > 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBulletYellowObjects3[k] = gdjs.NewSceneCode.GDBulletYellowObjects3[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBulletYellowObjects3.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBallObjects3 */
/* Reuse gdjs.NewSceneCode.GDBulletYellowObjects3 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBulletYellowObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBulletYellowObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber((( gdjs.NewSceneCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBallObjects3[0].getWidth()) * 0.7);
}{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects3[i].setHeight(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects3[i].setWidth(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x737a4c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6be464
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.NewSceneCode.GDBallObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects = Hashtable.newFrom({"Yellow": gdjs.NewSceneCode.GDYellowObjects1});gdjs.NewSceneCode.eventsList0x72b0ac = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7045428);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects1[i].clearForces();
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x72b0ac
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects = Hashtable.newFrom({"BulletYellow": gdjs.NewSceneCode.GDBulletYellowObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects = Hashtable.newFrom({"BulletYellow": gdjs.NewSceneCode.GDBulletYellowObjects1});gdjs.NewSceneCode.eventsList0x76150c = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = (gdjs.random(9) < 5);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
/* Reuse gdjs.NewSceneCode.GDBulletYellowObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "span_delay");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects, (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getX()) + (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth()) + gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.NewSceneCode.GDBulletYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDBulletYellowObjects1[0].getWidth()) - (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth()) - 40), 10 + gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 20), "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x76150c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.NewSceneCode.GDBallObjects1});gdjs.NewSceneCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x7383ac(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDBulletYellowObjects1.createFrom(runtimeScene.getObjects("BulletYellow"));
gdjs.NewSceneCode.GDYellowObjects1.createFrom(runtimeScene.getObjects("Yellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBulletYellowObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBulletYellowObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBulletYellowObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(3);
}}

}


{

gdjs.NewSceneCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.NewSceneCode.GDYellowObjects1.createFrom(runtimeScene.getObjects("Yellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
gdjs.NewSceneCode.condition3IsTrue_0.val = false;
gdjs.NewSceneCode.condition4IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "shot_delay");
}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlatformObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition2IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition3IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 0;
}}
}
}
}
if (gdjs.NewSceneCode.condition4IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDYellowObjects1 */
gdjs.NewSceneCode.GDBulletYellowObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shot_delay");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects, (( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getPointX("")) + (( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getWidth()), (( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getPointY("")) + ((( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getHeight()) + 0) / 2, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDBulletYellowObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBulletYellowObjects1[i].addPolarForce(0, 1500, 1);
}
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


{

gdjs.NewSceneCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDBallObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDBallObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDBallObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDBallObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.NewSceneCode.eventsList0x6be464(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.NewSceneCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
gdjs.NewSceneCode.GDYellowObjects1.createFrom(runtimeScene.getObjects("Yellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDYellowObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "chomp_delay");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chomp_delay");
}{runtimeScene.getVariables().getFromIndex(2).sub(1);
}}

}


{

gdjs.NewSceneCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.NewSceneCode.GDYellowObjects1.createFrom(runtimeScene.getObjects("Yellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDYellowObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDYellowObjects1[i].getX() > (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getX()) + (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDYellowObjects1[k] = gdjs.NewSceneCode.GDYellowObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDYellowObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
/* Reuse gdjs.NewSceneCode.GDYellowObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDYellowObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDYellowObjects1[0].getPointY("")));
}
}}

}


{

gdjs.NewSceneCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));
gdjs.NewSceneCode.GDPlatformObjects1.createFrom(runtimeScene.getObjects("Platform"));
gdjs.NewSceneCode.GDYellowObjects1.createFrom(runtimeScene.getObjects("Yellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDYellowObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDYellowObjects1[i].getX() > (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getX()) + (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth())) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDYellowObjects1[k] = gdjs.NewSceneCode.GDYellowObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDYellowObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBallObjects1[i].getBehavior("Pathfinding").destinationReached() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBallObjects1[k] = gdjs.NewSceneCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBallObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBallObjects1 */
/* Reuse gdjs.NewSceneCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBallObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth()) + gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.NewSceneCode.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects1[0].getWidth()) - (gdjs.NewSceneCode.GDBallObjects1[i].getWidth())), gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.NewSceneCode.GDBallObjects1[i].getHeight())));
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x72b0ac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.NewSceneCode.GDLabelAmmoObjects1.createFrom(runtimeScene.getObjects("LabelAmmo"));
{for(var i = 0, len = gdjs.NewSceneCode.GDLabelAmmoObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLabelAmmoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.NewSceneCode.GDBulletYellowObjects1.createFrom(runtimeScene.getObjects("BulletYellow"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "span_delay");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBulletYellowObjects1Objects) < 3;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x76150c(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDBallObjects1.createFrom(runtimeScene.getObjects("Ball"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBallObjects1Objects) <= 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4be0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDPlatformObjects1.length = 0;
gdjs.NewSceneCode.GDPlatformObjects2.length = 0;
gdjs.NewSceneCode.GDPlatformObjects3.length = 0;
gdjs.NewSceneCode.GDPlatformObjects4.length = 0;
gdjs.NewSceneCode.GDPlatformObjects5.length = 0;
gdjs.NewSceneCode.GDBallObjects1.length = 0;
gdjs.NewSceneCode.GDBallObjects2.length = 0;
gdjs.NewSceneCode.GDBallObjects3.length = 0;
gdjs.NewSceneCode.GDBallObjects4.length = 0;
gdjs.NewSceneCode.GDBallObjects5.length = 0;
gdjs.NewSceneCode.GDShot1Objects1.length = 0;
gdjs.NewSceneCode.GDShot1Objects2.length = 0;
gdjs.NewSceneCode.GDShot1Objects3.length = 0;
gdjs.NewSceneCode.GDShot1Objects4.length = 0;
gdjs.NewSceneCode.GDShot1Objects5.length = 0;
gdjs.NewSceneCode.GDBulletYellowObjects1.length = 0;
gdjs.NewSceneCode.GDBulletYellowObjects2.length = 0;
gdjs.NewSceneCode.GDBulletYellowObjects3.length = 0;
gdjs.NewSceneCode.GDBulletYellowObjects4.length = 0;
gdjs.NewSceneCode.GDBulletYellowObjects5.length = 0;
gdjs.NewSceneCode.GDYellowObjects1.length = 0;
gdjs.NewSceneCode.GDYellowObjects2.length = 0;
gdjs.NewSceneCode.GDYellowObjects3.length = 0;
gdjs.NewSceneCode.GDYellowObjects4.length = 0;
gdjs.NewSceneCode.GDYellowObjects5.length = 0;
gdjs.NewSceneCode.GDLabelAmmoObjects1.length = 0;
gdjs.NewSceneCode.GDLabelAmmoObjects2.length = 0;
gdjs.NewSceneCode.GDLabelAmmoObjects3.length = 0;
gdjs.NewSceneCode.GDLabelAmmoObjects4.length = 0;
gdjs.NewSceneCode.GDLabelAmmoObjects5.length = 0;
gdjs.NewSceneCode.GDInfoObjects1.length = 0;
gdjs.NewSceneCode.GDInfoObjects2.length = 0;
gdjs.NewSceneCode.GDInfoObjects3.length = 0;
gdjs.NewSceneCode.GDInfoObjects4.length = 0;
gdjs.NewSceneCode.GDInfoObjects5.length = 0;
gdjs.NewSceneCode.GDShootingAreaObjects1.length = 0;
gdjs.NewSceneCode.GDShootingAreaObjects2.length = 0;
gdjs.NewSceneCode.GDShootingAreaObjects3.length = 0;
gdjs.NewSceneCode.GDShootingAreaObjects4.length = 0;
gdjs.NewSceneCode.GDShootingAreaObjects5.length = 0;

gdjs.NewSceneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
