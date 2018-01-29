import AwsCloudTrailLogListener from './aws_cloud_trail_log_listener';

export function handler(cloudtrailEvent, context) {
  const enabledListeners = [
    AwsCloudTrailLogListener.EC2.name,
    AwsCloudTrailLogListener.S3.name,
    AwsCloudTrailLogListener.AUTOSCALE_GROUPS.name,
    AwsCloudTrailLogListener.VPC.name,
    AwsCloudTrailLogListener.SUBNETS.name,
    AwsCloudTrailLogListener.ELB.name,
    AwsCloudTrailLogListener.EBS.name,
    AwsCloudTrailLogListener.INTERNET_GATEWAY.name,
    AwsCloudTrailLogListener.RDS.name,
    AwsCloudTrailLogListener.EMR.name,
    AwsCloudTrailLogListener.DATA_PIPELINE.name,
    AwsCloudTrailLogListener.SECURITY_GROUP.name,
    AwsCloudTrailLogListener.AMI.name,
    AwsCloudTrailLogListener.SNAPSHOT.name,
    AwsCloudTrailLogListener.ELASTIC_IP.name,
    AwsCloudTrailLogListener.DYNAMO_DB.name,
    AwsCloudTrailLogListener.ENI.name,
    AwsCloudTrailLogListener.NAT_GATEWAY.name,
    AwsCloudTrailLogListener.NETWORK_ACL.name,
    AwsCloudTrailLogListener.ROUTE_TABLE.name,
    AwsCloudTrailLogListener.VPC_PEERING.name,
    AwsCloudTrailLogListener.VPN.name,
    AwsCloudTrailLogListener.OPS_WORKS.name,
    AwsCloudTrailLogListener.OPS_WORKS_CLONE.name
    
  ];

  let listener = new AwsCloudTrailLogListener(cloudtrailEvent, context, enabledListeners);
  return listener.execute();

};
