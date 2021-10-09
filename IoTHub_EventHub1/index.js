module.exports = function (context, IoTHubMessages) {
    context.log(context);
    context.log('Function triggered to process a message: ', IoTHubMessages);
    context.log('EnqueuedTimeUtc =', context.bindingData.enqueuedTimeUtc);
    //context.log('SequenceNumber =', context.bindingData.sequenceNumber);
    //context.log('Offset =', context.bindingData.offset);

    context.done();
};
